import React, { createContext, useContext, useReducer} from "react";

export const DataLayerContext = createContext();

export const DataLayer = ( { intitialState, reducer, children}) => (

    <DataLayerContext.Provider value={useReducer(reducer, intitialState)}>
        {children}
    </DataLayerContext.Provider>

);

export const useDataLayerValue = () => useContext(DataLayerContext);


export default DataLayer;