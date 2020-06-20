import React, { createContext, useReducer } from 'react'
import { reducer } from './appReducer'

const initialState = {
    transactions: [
        {id:1, name: 'salary', amount: '2000', type:'credit'},
        {id:2, name: 'grocery', amount: '-55', type:'expense'},
        {id:3, name: 'mobile', amount: '-399', type:'expense'},
        {id:4, name: 'parking', amount: '-10', type:'expense'},
    ]
}

export const GlobalContext = createContext(initialState)

export const GlobalProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(reducer, initialState)
    return (
        <GlobalContext.Provider value={{ transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}