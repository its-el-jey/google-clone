import React, { createContext, useContext, useReducer } from 'react';

// Preparing the data layer
export const StateContext = createContext();

// initialState - what the data layer looks like when the app is loaded
export const StateProvider = ({ reducer, initialState, children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children} 
    {/* refering to <App /> */}
  </StateContext.Provider>
)

// hook allows us to pull info from the data layer
export const useStateValue = () => useContext(StateContext);