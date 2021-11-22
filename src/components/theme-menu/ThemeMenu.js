import React from 'react'
import './ThemeMenu.css'

const generateRandomTheme = ()=> {
  const themes = ['candy', 'charlie brown', 'computers', 'dance', 'donuts', 'hello kitty', 'flowers', 'nature', 'turtles', 'space'];
  const randomIndex = Math.floor(Math.random() * themes.length);
  return themes[randomIndex];
}

export default function ThemeMenu({ setTheme }) {
  return (
    <>
      <h2>2. Choose a theme:</h2>
      <input 
      onChange={(e) => {setTheme(e.target.value)}}
      type="text" 
      className="theme-input" 
      placeholder={generateRandomTheme()} />
    </>
  )
}
