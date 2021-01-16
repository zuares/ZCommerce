import Link from 'next/link';
import React, { useContext } from 'react';
import { addToCart } from '../../../store/Actions';
import { DataContext } from '../../../store/GlobalState';
import Card from "../Card";
import CardImage from "../Card/CardImage";

function CardProduct({ product }) {
    const { state: { cart }, dispatch } = useContext(DataContext)
    const { _id, images, price, inStock } = product
    return (
        <Card className="shadow-lg  mt-2 bg-white rounded-t-lg overflow-hidden md:max-w-xs lg:w-72 xl:w-12/12" >
            <CardImage src={`${images[0].url}`}
                maxHeight="200px" className="object-cover rounded-t " />
            <div className="p-4 space-y-6  " >
                <div className="flex justify-between text-true-gray-300 font-bold text-sm" >
                    <div className="text-xs font-light text-green-500">$ {price} </div>
                    <div>{inStock} Items</div>
                </div>
                <div className="flex justify-between text-white mb-8 " >
                    <Link href={`/product/${_id}`}>
                        <a className="px-4 py-2 bg-gray-100 border border-blue-400 text-blue-400  focus:outline-none">View</a>
                    </Link>
                    <button className={`shadow-md px-4 py-2 bg-yellow-400 text-gray-100 font-bold focus:outline-none  focus:ring-1 ring-blue-500 disabled:opacity-50`} disabled={inStock === 0} onClick={() => dispatch(addToCart(product, cart))} >Add To Cart</button>
                </div>
            </div>
        </Card >
    );
}

export default CardProduct;