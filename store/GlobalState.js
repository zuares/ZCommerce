import React, { createContext, useReducer, useEffect } from 'react';
import { getData } from '../utils/fetchData';
import reducers from './Reducer';


export const DataContext = createContext()

function DataProvider({ children }) {
    const initialState = { notify: {}, auth: {}, cart: [] }
    const [state, dispatch] = useReducer(reducers, initialState)
    const { cart } = state
    useEffect(() => {
        const fetchUser = async () => {
            const data = await getData('auth/accessToken')
            dispatch({ type: 'AUTH', payload: { ...data } })
        }

        fetchUser()
    }, [])

    useEffect(() => {
        const MyCart = JSON.parse(localStorage.getItem('MyCart'))
        if (MyCart)
            return dispatch({ type: "CART", payload: MyCart })
    }, [])

    useEffect(() => {
        localStorage.setItem('MyCart', JSON.stringify(cart))
    }, [cart])

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );

}

export default DataProvider;