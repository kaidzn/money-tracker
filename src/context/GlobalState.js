import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';



//Initial State
const InitialState = {
    transactions:  []
}

// Create context

export const GlobalContext = createContext(InitialState);

// Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, InitialState);


    // Actions
    function deleteTransaction(id){
        dispatch({
            type: 'DELETE_TRANSACTION',
            playload: id
        })
    }

    function addTransaction(transaction){
        dispatch({
            type: 'ADD_TRANSACTION',
            playload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction  ,
        addTransaction  
    }}>
        {children}
    </GlobalContext.Provider>)
}
