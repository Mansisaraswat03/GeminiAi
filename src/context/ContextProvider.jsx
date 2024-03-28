"use client"
import React, { createContext,  useState } from 'react'
const Context = createContext();
const ContextProvider = ({children}) => {
   const [theme,setTheme] = useState("dark");
   const toggle =()=>{
    setTheme(theme==="dark" ? "light" : "dark");
   }
   const contextValue= {
    theme,
    toggle,
   }
  return (
    <div>
      <Context.Provider value ={contextValue}>
        <div className={theme}>{children}</div>
      </Context.Provider>
    </div>
  )
}

export default ContextProvider;
