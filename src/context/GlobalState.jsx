import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// initials state
const initialState = {
  transaction: [
    { id: 1, text: 'flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
  ]
}

// create content 
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (<GlobalContext.Provider value={{
    transaction: state.transaction
  }}>
    {children}
  </GlobalContext.Provider>);
}