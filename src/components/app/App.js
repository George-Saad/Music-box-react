import React from 'react'
import './App.css';
import MenuScreen from '../menu-screen/MenuScreen';
import { SongProvidor } from '../../contexts/SongContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MusicScreen from '../music-screen/MusicScreen';
import { GifsProvidor } from '../../contexts/GifsContext';

function App() {

  return (
    <>
      <SongProvidor>
        <GifsProvidor>
          <Router>
            <Routes>
              <Route path="" element={<MenuScreen />} />
              <Route path="/music-screen/:theme" element={<MusicScreen /> } />
            </Routes>
          </Router>
        </GifsProvidor>
      </SongProvidor>
    </>
    
  );
}

export default App;
