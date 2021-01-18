import React, { useState, useEffect, useContext } from 'react';
import MainApp from '../../components/layouts/MainApp';
import Content from '../../components/container/Content';
import Notify from '../../components/molecules/Notify';
import { DataContext } from '../../store/GlobalState';
import { useRouter } from 'next/router';
import OrderDetail from '../../components/organisme/OrderDetail';


function DetailOrder() {
    const { state, dispatch } = useContext(DataContext)
    const { order, auth, notify } = state
    const router = useRouter()
    const [orderDetail, setOrderDetail] = useState([])
    useEffect(() => {
        const newArr = order.filter(item => item._id === router.query.id)
        setOrderDetail(newArr)
    }, [order]);


    return (
        <MainApp>
            {notify.msg ? <Notify msg={notify.msg} /> : null}
            <Content title="Detail Order">

                <div>
                    <button className={`bg-gray-200 px-4 py-1 text-white`} >Go back</button>
                </div>
                <div className={`max-w-xl my-5`} >
                    <div>
                        <h4 className={` font-bold border-b inline-block mb-2`} >Shipping</h4>
                    </div>
                    <OrderDetail orderDetail={orderDetail} />
                </div>
            </Content>

        </MainApp >
    );
}

export default DetailOrder;