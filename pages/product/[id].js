import React, { useState } from 'react';
import MainApp from '../../components/layouts/MainApp';
import { getData } from '../../utils/fetchData';
import CardImage from '../../components/molecules/Card/CardImage';
import Image from '../../components/atoms/Image';
import Container from '../../components/atoms/Container';

function DetailProduct({ product: { _id, images, title, inStock, price, description, content, sold } }) {

    const [activeImg, setActiveImage] = useState(0)

    return (
        <MainApp>
            <Container>

                <div className="px-3 md:px-8 pb-8" >
                    <div className="pt-5 mb-5">
                        <h2 className="text-xl font-bold text-true-gray-500">Detail Product</h2>
                    </div>
                    <div className="flex gap-5 space-y-4 flex-wrap" >
                        <div className="w-full lg:w-7/12  ">
                            <div className="p-2 border rounded-t border-gray-100 shadow-sm " >
                                <CardImage src={images[activeImg].url} className={`object-cover h-96 lg:object-top `} />
                                <div className="flex gap-1 pt-2 overflow-hidden" >
                                    {
                                        images.map((image, index) => <Image key={index} src={image.url} className={`w-20 h-20 object-cover object-top  border-2 hover:border-blue-300  cursor-pointer ${activeImg === index ? 'border-red-500' : ''}`} onClick={() => setActiveImage(index)} />)
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`lg:w-4/12 p-2`} >
                            <h2 className="text-2xl font-bold text-true-gray-800 capitalize " >{title}</h2>
                            <div className={`my-4 text-green-400 font-bold text-lg`} >$ {price},00</div>
                            <div className={`flex justify-between w-full my-2 items-center`} >
                                <div className={`text-yellow-300 font-sm`} >Sold: {sold}</div>
                                <div className={`text-blue-300 font-sm`}>Stock: {inStock}</div>
                            </div>
                            <div className={`mt-8`} >
                                <h4 className={`font-bold border-b inline-block mb-2 font-serif text-true-gray-800`}>Description</h4>
                                <div className="leading-relaxed text-true-gray-700  font-light" >
                                    {description}
                                </div>
                                <div className={`leading-relaxed font-light mt-1 text-true-gray-600`} >
                                    <div>
                                        {content}
                                    </div>
                                </div>
                                <div className={`mt-4 float-right text-white w-full md:w-auto`} >
                                    <button className={`bg-yellow-400 font-bold  shadow-md w-full block md:px-4 py-2.5 focus:outline-none focus:ring-1 ring-blue-500 disabled:opacity-50`} disabled={inStock === 0 ? true : false}  >Add To Cart</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>

        </MainApp>
    );
}

export default DetailProduct;

export async function getServerSideProps({ params: { id: id } }) {
    const product = await getData(`product/${id}`)
    if (product.err) {
        return {
            notFound: true
        }
    }
    return { props: { product } }
}
