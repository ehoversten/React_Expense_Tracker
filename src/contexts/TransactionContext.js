import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: []
}

// Create Context
export const TransactionContext = createContext(initialState);


// Provider Context
export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // -- Define ACTIONS -- //
    // DELETE Transaction
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }
    // ADD Transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        })
    }


    return (
        // Make our STATE (context) and METHODS available to the nested COMPONENTS in our application
        <TransactionContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction}}> 
            { children }
        </TransactionContext.Provider>
    )
}