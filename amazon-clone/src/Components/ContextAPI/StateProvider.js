//setup data layer
//we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

//this is the data layer
export const StateContext = createContext();

//Build a provider
export const StateProvider = ({ reducer, initailState, children }) => (
    <StateContext.Provider value  = {useReducer(reducer, initailState)}>
        {children}
    </StateContext.Provider>
)

//This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);