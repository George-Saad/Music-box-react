import React, { useState, createContext } from 'react'

export const SongContext = createContext();

export const SongProvidor = ({ children }) => {
  
  const [song, setSong] = useState(null)

  return (
    <SongContext.Provider value={[song, setSong]}>
      { children }
    </SongContext.Provider>
  )
}