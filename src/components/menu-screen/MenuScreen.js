import React, { useContext, useState } from 'react'
import './MenuScreen.css'
import SongMenu from '../song-menu/SongMenu'
import ThemeMenu from '../theme-menu/ThemeMenu';
import { SongContext } from '../../contexts/SongContext';
import { useNavigate } from "react-router-dom";

export default function MenuScreen() {
  const [theme, setTheme] = useState('')
  const [song] = useContext(SongContext);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    
    if(song == '' || theme == '') { 
      return
    }

    console.log(song + ' ' + theme);
    
    navigate('/music-screen/'  + encodeURIComponent(theme))
  
  }

  return (
    <fieldset className="menu-screen">
      <img className="logo" src="https://giphy.com/static/img/about/stickers/logo-spin.gif" />
      <h1>Music Box</h1>
      <form onSubmit={handleSubmit}>
        <SongMenu />
        <ThemeMenu setTheme={setTheme} />
        {/* <h2>2. Choose a theme:</h2>
        <input type="text" id="query-input" placeholder="Enter a word or phrase" />
        <div id="erro
        r" class="inactive">Not enough gifs for this theme. Please try another.</div>
        */}
        <input className="submit-button" type="submit" value="Go" /> 
      </form>
    </fieldset>
  )
}
