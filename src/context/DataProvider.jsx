import React,{createContext,useState} from 'react'


export const DataContext = createContext(null);

function DataProvider({children}) {
    const [value,setValue] = useState('');
  return (
    <DataContext.Provider value={{value , setValue}}>
         {children}
    </DataContext.Provider>
  )
}

export default DataProvider