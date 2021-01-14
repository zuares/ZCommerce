import React, { createContext, useReducer } from 'react';
import reducers from './Reducer';


export const DataContext = createContext()

function DataProvider({ children }) {
    const initialState = { notify: {}, auth: {} }
    const [state, dispatch] = useReducer(reducers, initialState)

    return (
        <DataContext.Provider value={{ state, dispatch }}>
            {children}
        </DataContext.Provider>
    );

}

export default DataProvider;