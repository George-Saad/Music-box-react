import React, { useContext, useEffect, useState } from "react";
import "./PlayButton.css";
import { SongContext } from "../../contexts/SongContext";
import { Helmet } from "react-helmet";

export const PlayButton = () => {
  const [isPlay, setIsPlay] = useState(false);
  const [song] = useContext(SongContext);

  useEffect(() => {
    const dancer = new window.Dancer();
    console.log(dancer);
  }, []);

  function toggleIsPlay() {
    setIsPlay((prev) => !prev);
  }

  return (
    <div className="play-button">
      <Helmet>
        <script src="./../../lib/dancer.min.js" type="text/babel" />
      </Helmet>
      {isPlay ? (
        <img
          onClick={toggleIsPlay}
          src="../../../public/pause-icon.png"
          alt="Pause image"
        />
      ) : (
        <img
          onClick={toggleIsPlay}
          src="./../../../public/play-icon.png"
          alt="Pause image"
        />
      )}
    </div>
  );
};
