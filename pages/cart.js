import React, { useContext } from 'react';
import MainApp from '../components/layouts/MainApp'
import Content from '../components/container/Content'
import CartTable from '../components/molecules/Table/CartTable';
import Fields from '../components/molecules/Fields';
import { DataContext } from '../store/GlobalState';

function cart() {
    const { state: { cart } } = useContext(DataContext)
    return (
        <MainApp>
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
                            <Fields type="text" name="address" label="Adress" />
                            <Fields type="text" name="phone" label="Phone" />
                            <button className={`px-5 py-2.5 bg-yellow-300 text-white font-bold shadow-md `} >Checkout</button>
                        </div>
                    </div>

                </div>
            </Content>
        </MainApp>
    );
}

export default cart;