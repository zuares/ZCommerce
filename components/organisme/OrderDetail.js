import React from 'react';
import Link from 'next/link'
import PayButton from '../molecules/Button/PayButton';

function OrderDetail({ orderDetail }) {

    return (
        <>
            {
                orderDetail.map(order => (
                    <>
                        <div key={order._id} >
                            <p>Name : {order.user.name}</p>
                            <p>Email : {order.user.email}</p>
                            <p>Address : {order.address}</p>
                            <p>Mobile : {order.mobile}</p>
                            <div className="py-4">
                                <h2 className={`text-lg font-bold`} >Total : ${order.total}</h2>
                                <PayButton odr={order} />
                            </div>
                        </div>
                        <div className={`text-lg  max-w-lg  my-2 text-white block px-4 py-1 ${order.delivered ? 'bg-green-500' : 'bg-red-500 '}`} >
                            {order.delivered ? `Delivered` : `Not Delivered`}
                        </div>
                        <div className={`text-lg  max-w-lg my-2 text-white block px-4 py-1 ${order.paid ? 'bg-green-500' : 'bg-red-500 '}`} >
                            {order.paid ? `Success Paid On   ${new Date(order.dateOfPayment).toLocaleDateString()}` : `Not Paid`}
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
        </>
    );
}

export default OrderDetail;