import React, { createContext, useReducer } from 'react'
import appReducer from './appReducer'
import { addTransaction, deleteTransaction } from './appActions'

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
    const [ state, dispatch ] = useReducer(appReducer, initialState)

    const addNewTransaction = (values) => {
        dispatch(addTransaction(values))
    }
    const delTrans = (id) => {
        dispatch(deleteTransaction(id))
    }
    // const [ state ] = useReducer(reducer, initialState)
    return (
        <GlobalContext.Provider value={{ addNewTransaction, delTrans, transactions: state.transactions}}>
            {children}
        </GlobalContext.Provider>
    )
}   