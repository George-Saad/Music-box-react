import './GifDisplay.css'
import React, { useEffect, useState, useContext } from 'react'
import Loading from '../loading/Loading';

export default function GifDisplay({ data }) {

  const [gifs, setGifs] = useState([]);
  const [index, setIndex] = useState(0);
  console.log(index);
  console.log(gifs.length);

  if (index === gifs.length - 1) {
    console.log('Equal');
  }

  const preLoadGifs = (gifsData, i)=> {
    if(i === gifsData.length){
      return
    }
    const gif = new Image();
    gif.src = gifsData[i].images.downsized.url;
    gif.onload = () => {
      setGifs(previousGifs => [...previousGifs, gif])
      // if(gifs.length == 2){
      //   this.#initGifs();
      //   this.#_gifsReadyCallback();       
      // }
      preLoadGifs(gifsData, i+1);
    };
  }

  useEffect(()=>{
    preLoadGifs(data, 0)
  }, [])

  function getNextGif() {
    if (index === gifs.length - 1) {
      setIndex(0)
    } else {
      setIndex(pervIndex => pervIndex + 1);
    }
  }

  if(gifs.length < 2) return <Loading />

  return (
    <>
      <div className="background-gif" style={{backgroundImage: `url(${gifs[index].src})`}}>
      </div>
    </>
  )
}
