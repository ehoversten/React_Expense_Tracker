import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
    transactions: [
        { id: 1, text: 'Direct Deposit', amount: 250 },
        { id: 2, text: 'Booze', amount: -50 },
        { id: 3, text: 'Takeout', amount: -40 }
    ]
}

// Create Context
export const TransactionContext = createContext(initialState);


// Provider Context
export const TransactionProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <TransactionContext.Provider value={{ transactions: state.transactions}}> 
            { children }
        </TransactionContext.Provider>
    )
}