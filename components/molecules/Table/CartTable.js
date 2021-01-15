import React from 'react';
import IcDelete from '../../icons/IcDelete';

function CartTable(props) {
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
                    <td className={`p-4  font-bold s`}>1</td>
                    <td className={`p-4`}>Jeans</td>
                    <td className={`p-4`}>
                        <button className={`px-2 bg-gray-300 text-white font-bold`} >-</button>
                        <span className={`mx-3 font-bold text-sm text-blue-600 `} >2</span>
                        <button className={`px-2 bg-green-300 text-white font-bold`} >+</button>
                    </td >
                    <td className={`p-4`}>$ 5</td>
                    <td className={`p-4`}>
                        <button className={`p-1 bg-red-400`}>
                            <IcDelete className={`w-5 h-5 text-white`} />
                        </button>
                    </td>
                </tr>
            </tbody>

        </table>

    );
}

export default CartTable;