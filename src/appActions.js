export const ADD_TRANSACTION  = 'ADD_TRANSACTION'
export const DELETE_TRANSACION  = 'DELETE_TRANSACION'

export const addTransaction = (values) => {
    return {
        type: ADD_TRANSACTION,
        values
    }
}

export const deleteTransaction = (id) => {
    return {
        type: DELETE_TRANSACION,
        id
    }
}