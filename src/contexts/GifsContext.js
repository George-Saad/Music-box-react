import React, { useState, createContext } from 'react'

export const GifsContext = createContext();

export const GifsProvidor = ({ children }) => {
  
  const [gifs, setGifs] = useState([])

  return (
    <GifsContext.Provider value={[gifs, setGifs]}>
      { children }
    </GifsContext.Provider>
  )
}