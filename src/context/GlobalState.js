import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Intial State
// const InitialState = [
//     {id:1, label:"Flower", amount: 20},
//     {id:2, label:"Salary", amount: 500000},
//     {id:1, label:"Book", amount: 300},
//     {id:1, label:"Camera", amount: 120},
//     {id:1, label:"Surfing", amount: 2000}
// ];

// Initial state
const initialState = {
    transactions: []
  }
  
  // Create context
  export const GlobalContext = createContext(initialState);
  
  // Provider component
  export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
  
    // Actions
    function deleteTransaction(id) {
      dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
      });
    }
  
    function addTransaction(transaction) {
      dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
      });
    }
  
    return (<GlobalContext.Provider value={{
      transactions: state.transactions,
      deleteTransaction,
      addTransaction
    }}>
      {children}
    </GlobalContext.Provider>);
  }