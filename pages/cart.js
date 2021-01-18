import React, { useContext, useState, useEffect } from 'react';
import MainApp from '../components/layouts/MainApp'
import Content from '../components/container/Content'
import CartTable from '../components/molecules/Table/CartTable';
import Notify from '../components/molecules/Notify';
import Fields from '../components/molecules/Fields';
import { DataContext } from '../store/GlobalState';
import PayButton from '../components/molecules/Button/PayButton';
import Link from 'next/link';
import { getData, postData } from '../utils/fetchData';
import { useRouter } from 'next/router'

function cart() {
    const { state, dispatch } = useContext(DataContext)
    const { cart, notify, auth, order } = state
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [total, setTotal] = useState(0)

    const router = useRouter()

    const [callback, setCallback] = useState(false)

    const handlePayment = async () => {
        if (!address || !mobile)
            return dispatch({ type: "NOTIFY", payload: { msg: { err: `Please Add your address and mobile` } } })

        let newCart = [];
        for (const item of cart) {
            const res = await getData(`product/${item._id}`)
            if (res.inStock - item.quantity >= 0) {
                newCart.push(item)
            }
        }

        if (newCart.length < cart.length) {
            setCallback(!callback)
            return dispatch({ type: "NOTIFY", payload: { msg: { err: `The product is out of stock or quantity insuffienct` } } })
        }

        postData('order', { address, mobile, cart, total }, auth.access_token)
            .then(res => {
                if (res.err) return dispatch({ type: "NOTIFY", payload: { msg: { err: res.err } } })

                dispatch({ type: "CART", payload: [] })
                const newOrder = {
                    ...res.newOrder,
                    user: auth.user
                }
                dispatch({ type: "ORDER", payload: [...order, newOrder] })
                dispatch({ type: "NOTIFY", payload: { msg: { success: res.msg } } })

                return router.push(`/order/${res.newOrder._id}`)
            })


    }

    useEffect(() => {
        const getTotal = () => {
            const res = cart.reduce((prev, item) => {
                return prev + (item.price * item.quantity)
            }, 0)
            setTotal(res)
        }
        getTotal()
    }, [cart]);

    useEffect(() => {
        const cartLocal = JSON.parse(localStorage.getItem('MyCart'))
        if (cartLocal.length > 0) {
            const updateCart = async () => {
                let newArr = []
                for (const item of cartLocal) {
                    const res = await getData(`product/${item._id}`)
                    const { _id, title, images, price, inStock, sold } = res
                    if (inStock > 0) {
                        newArr.push(
                            {
                                _id, title, images, price, inStock, sold,
                                quantity: item.quantity > inStock - sold ? 1 : item.quantity
                            }
                        )
                    }
                    dispatch({ type: "CART", payload: newArr })
                }
            }
            updateCart()
        }
    }, []);

    return (
        <MainApp>
            {notify.msg ? <Notify msg={notify.msg} /> : null}
            <Content title="My Cart" >
                {
                    cart.length > 0 ?
                        <div className={`lg:flex justify-between `}>

                            <div className={`lg:w-7/12`} >
                                <h2 className={`text-true-gray-400 font-bold mb-8 inline-block border-b pb-2 `} >Your Items</h2>
                                {
                                    cart.map((item, idx) => <CartTable key={idx} id={idx} item={item} />)
                                }

                            </div>
                            <div className={`font-bold text-lg `} >
                                Total : {total}
                            </div>
                            <div className={`space-y-4 mt-8 lg:mt-0 md:w-8/12 lg:w-4/12 px-2 `}>
                                <h2 className={`text-true-gray-400 font-bold border-b pb-2 inline-block`} >Payment</h2>
                                <div className={`space-y-4 shadow-lg px-4 py-8 `} >
                                    <Fields type="text" name="address" label="Adress" value={address} onChange={(e) => setAddress(e.target.value)} />
                                    <Fields type="text" name="mobile" label="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                    <Link href={auth.user ? '#!' : '/login'}  >
                                        <a className={`px-5 py-2.5 bg-yellow-300 text-white font-bold shadow-md inline-block `} onClick={handlePayment}  >
                                            Process
                                   </a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                        :
                        <div className={`flex justify-center items-center `} >
                            <div>
                                <img src={`cart.png`} alt="" className={` w-56 object-cover mt-20 `} />
                                <div className={`text-center mt-8`} >
                                    <h2 className={`text-xl font-bold text-true-gray-500`} >Keranjang kosong</h2>
                                </div>
                            </div>
                        </div>
                }
            </Content>
        </MainApp>
    );
}

export default cart;