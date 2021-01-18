import Link from 'next/link';
import React, { useContext } from 'react';
import { inCrease, deCrease, deleteItem } from '../../../store/Actions';
import { DataContext } from '../../../store/GlobalState';
import IcDelete from '../../icons/IcDelete';

function CartTable({ item, id }) {
    const { state, dispatch } = useContext(DataContext)
    const { cart } = state
    return (
        <table className={`table table-fixed  w-full border-separate   shadow-inner   pb-12`} >
            <thead className={`text-true-gray-300 border-b `} >
                <tr className={`w-1/12`} >
                    <th className={`p-4 shadw`} >
                        #
                </th>
                    <th className={`w-4/12 p-4 s`} >
                        Product
                </th>
                    <th className={`w-3/12 p-4`} >
                        Quantity
                </th>
                    <th className={`w-2/12 p-4`} >
                        Price
                </th>
                    <th className={`w-2/12 p-4`} >
                        Action
                </th>
                </tr>
            </thead>
            <tbody className={`text-center text-gray-700`} >
                <tr className={`p-20`}>
                    <td className={`p-4  font-bold s`}>{id + 1}</td>
                    <td className={`p-4 capitalize`}>
                        <Link href={`product/${item._id}`} >
                            <a >
                                {item.title}
                            </a>
                        </Link>
                    </td>
                    <td className={`p-4`}>
                        <button className={`px-2 bg-gray-300 text-white focus:outline-none disabled:opacity-50 font-bold `} onClick={() => (item.quantity < 2) ? dispatch(deleteItem(cart, item._id)) : dispatch(deCrease(cart, item._id))}  >-</button>
                        <span className={`mx-3 font-bold text-sm text-blue-600 `} >{item.quantity}</span>
                        <button className={`px-2 bg-green-300 text-white focus:outline-none disabled:opacity-50 font-bold`} onClick={() => dispatch(inCrease(cart, item._id))} disabled={item.quantity === item.inStock ? true : false}  >+</button>
                    </td >
                    <td className={`p-4`}>$ {item.price * item.quantity}</td>
                    <td className={`p-4`}>
                        <button className={`p-1 bg-red-400`} onClick={() => dispatch(deleteItem(cart, item._id))} >
                            <IcDelete className={`w-5 h-5 text-white`} />
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>

    );
}

export default CartTable;