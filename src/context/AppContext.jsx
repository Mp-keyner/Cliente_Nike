import React, { createContext, useState, useEffect } from 'react'

export const AppContext = createContext()

export const AppContextProvider = ({children}) => {
   const [name, setName] = useState('name')

   return(
       <AppContext.Provider value={{name}}>
           {children}
       </AppContext.Provider>
   )
}
