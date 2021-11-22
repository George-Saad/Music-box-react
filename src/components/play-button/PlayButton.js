import React, { useContext, useEffect, useState } from 'react'
import './PlayButton.css'
import { SongContext } from '../../contexts/SongContext';
import AudioPlayer from './../../lib/audio-player'

export const PlayButton = () => {

  const [isPlay, setIsPlay] = useState(false);
  const [song] = useContext(SongContext);

  useEffect(() => {
      const audioPlayer = new AudioPlayer();
    //  audioPlayer.setSong(song);
  }, [])

  function toggleIsPlay() {
    setIsPlay(prev => !prev);
  }

  return (
    <div className="play-button">
    {
      isPlay ? <img onClick={toggleIsPlay} src="../../../public/pause-icon.png" alt="Pause image" />
      : <img onClick={toggleIsPlay} src="./../../../public/play-icon.png" alt="Pause image" /> 
    }
    </div>
  )
}
