import React, { useState, useEffect, useContext } from 'react';
import MainApp from '../../components/layouts/MainApp';
import Content from '../../components/container/Content';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';
import Link from 'next/link';


function DetailOrder() {
    const { state, dispatch } = useContext(DataContext)
    const { order, auth } = state
    const router = useRouter()
    const [orderDetail, setOrderDetail] = useState([])
    // console.log(order.cart.length);
    useEffect(() => {
        const newArr = order.filter(item => item._id === router.query.id)
        setOrderDetail(newArr)
    }, [order]);


    return (
        <MainApp>
            <Content title="Detail Order">

                <div>
                    <button className={`bg-blue-400 px-4 py-1 text-white`} >Go back</button>
                </div>
                <div className={`max-w-xl my-5`} >
                    <div>
                        <h4 className={` font-bold border-b inline-block mb-2`} >Shipping</h4>
                    </div>
                    {
                        orderDetail.map(order => (
                            <>
                                <div key={order._id} >
                                    <p>Name : {order.user.name}</p>
                                    <p>Email : {order.user.email}</p>
                                    <p>Address : {order.address}</p>
                                    <p>Mobile : {order.mobile}</p>
                                </div>
                                <div>
                                    {/* Order deliverd */}
                                </div>

                                <div>
                                    <h4 className={`my-4 font-bold border-b inline-block`} >Order Items</h4>
                                    {
                                        order.cart.map((item, idx) => (
                                            <div className={` space-y-4  flex max-w-lg space-y-6 items-center border-b py-2 `} key={idx} >
                                                <img src={item.images[0].url} alt={item.images[0].url} className={`w-20 h-11 object-cover `} />
                                                <h5 className={`flex-1 ml-6 `} >
                                                    <Link href={`/product/${item._id}`} >
                                                        <a className={`capitalize`}  >{item.title}</a>
                                                    </Link>
                                                </h5>

                                                <span className={`flex-1`} >
                                                    {item.quantity} x ${item.price}
                                                </span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        ))
                    }


                </div>
            </Content>

        </MainApp >
    );
}

export default DetailOrder;