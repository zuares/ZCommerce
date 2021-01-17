import React, { useContext, useState } from 'react';
import MainApp from '../components/layouts/MainApp'
import Content from '../components/container/Content'
import CartTable from '../components/molecules/Table/CartTable';
import Notify from '../components/molecules/Notify';
import Fields from '../components/molecules/Fields';
import { DataContext } from '../store/GlobalState';
import PayButton from '../components/molecules/Button/PayButton';
import Link from 'next/link';

function cart() {
    const { state, dispatch } = useContext(DataContext)
    const { cart, notify, auth } = state
    const [address, setAddress] = useState('')
    const [mobile, setMobile] = useState('')
    const [payment, setPayment] = useState(false)

    const handlePayment = () => {
        if (!address || !mobile)
            return dispatch({ type: "NOTIFY", payload: { msg: { err: `Please Add your address and mobile` } } })
        setPayment(true)
    }

    return (
        <MainApp>
            {notify.msg ? <Notify msg={notify.msg} /> : null}
            <Content title="My Cart" >
                <div className={`lg:flex justify-between `}>

                    <div className={`lg:w-7/12`} >
                        <h2 className={`text-true-gray-400 font-bold mb-8 inline-block border-b pb-2 `} >Your Items</h2>
                        {
                            cart.map((item, idx) => <CartTable key={idx} id={idx} item={item} />)
                        }

                    </div>

                    <div className={`space-y-4 mt-8 lg:mt-0 md:w-8/12 lg:w-4/12 px-2 `}>
                        <h2 className={`text-true-gray-400 font-bold border-b pb-2 inline-block`} >Payment</h2>
                        <div className={`space-y-4 shadow-lg px-4 py-8 `} >
                            <Fields type="text" name="address" label="Adress" value={address} onChange={(e) => setAddress(e.target.value)} />
                            <Fields type="text" name="mobile" label="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                            {
                                payment ?
                                    <PayButton total={10} address={address} mobile={mobile} state={state} dispatch={dispatch} /> :
                                    <Link href={auth.user ? '#!' : '/login'}  >
                                        <a className={`px-5 py-2.5 bg-yellow-300 text-white font-bold shadow-md inline-block `} onClick={handlePayment}  >
                                            Process
                                    </a>
                                    </Link>
                            }
                        </div>
                    </div>

                </div>
            </Content>
        </MainApp>
    );
}

export default cart;