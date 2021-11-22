import React, { useContext, useEffect, useState } from 'react'
import './MusicScreen.css'
import { useParams } from 'react-router-dom';
import { SongContext } from '../../contexts/SongContext';
import useFetch from '../../custom-hooks/useFetch';
import GifDisplay from '../gif-display/GifDisplay';
import Loading from '../loading/Loading'
import { PlayButton } from '../play-button/PlayButton';

export default function MusicScreen() {
  
  const [song] = useContext(SongContext);
  const { theme } = useParams();
//  const [gifs, setGifs] = useState([]);

  const path = "http://api.giphy.com/v1/gifs/search?q=";
  const limit = 25;
  const rating = 'g';
  const api_key = 'TKwNghGTjSlBDlvzRT9T1AcQ2osGzMg7';
  const query = path + encodeURIComponent(theme) 
  + "&api_key=" + encodeURIComponent(api_key) + "&limit=" + limit + "&rating=" + rating;
  const { data, loading, error } = useFetch(query)
  

  if (error) return null

//  if(gifs.length < 2) return null

  if (loading) return <Loading />

  return (
    <div className="music">
      <GifDisplay data={data.data} />
      <PlayButton />
    </div>
  )
}
