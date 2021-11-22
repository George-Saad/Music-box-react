import React, { useContext, useEffect } from 'react'
import './SongMenu.css'
import useFetch from '../../custom-hooks/useFetch';
import { SongContext } from './../../contexts/SongContext';

export default function SongMenu() {

  const [, setSong] = useContext(SongContext);

  const url = 'https://yayinternet.github.io/hw4-music/songs.json';
  const { data, error, loading } = useFetch(url);
  const songList = data ? Object.values(data) : [];

  useEffect(() => {
    if(songList.length > 0){
      setSong(songList[0].songUrl)
    }
  }, [loading])
  
  function handleSongChange(e) {
    setSong(e.target.value)
  }

  if(error) return null;

  return (    
    <>
      <h2>1. Choose a song:</h2>
      <select onChange={handleSongChange} className="song-selector">
        {
          !loading ?
          songList.map((song, index) => {
            return <option key={index} value={song.songUrl} >{song.artist + ' ' + song.title}</option>
          }) : null
        }
      </select>
    </>
  )
}