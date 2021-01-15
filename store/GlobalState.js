import React, { createContext, useReducer, useEffect } from 'react';
import { getData } from '../utils/fetchData';
import reducers from './Reducer';


export const DataContext = createContext()

function DataProvider({ children }) {
    const initialState = { notify: {}, auth: {} }
    const [state, dispatch] = useReducer(reducers, initialState)

    useEffect(() => {

        const fetchUser = async () => {
            const data = await getData('auth/accessToken')
            dispatch({ type: 'AUTH', payload: data })
        }

        fetchUser()
    }, [])

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );

}

export default DataProvider;