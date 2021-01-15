import React from 'react';
import Card from "../Card";
import CardImage from "../Card/CardImage";

function CardProduct() {

    return (
        <Card className="shadow-lg  mt-2 bg-white rounded-t-lg overflow-hidden md:max-w-xs lg:w-72 xl:w-12/12" >
            <CardImage src={`https://images.unsplash.com/photo-1518825059470-fce76c93d450?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=925&q=80`}
                height="200px" className="object-cover rounded-t " />
            <div className="p-4 space-y-6  " >
                <div className="flex justify-between text-true-gray-300 font-bold text-sm" >
                    <div className="text-xs font-light text-green-500">$ 28 </div>
                    <div>50 Items</div>
                </div>
                <div className="flex justify-between text-white mb-8 " >
                    <button className="px-4 py-2 bg-gray-100 border border-blue-400 text-blue-400  focus:outline-none">View</button>
                    <button className=" shadow-md px-4 py-2 bg-yellow-400 text-gray-100 font-bold focus:outline-none">Add To Cart</button>
                </div>
            </div>
        </Card>
    );
}

export default CardProduct;