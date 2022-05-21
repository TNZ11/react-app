import { React, useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer';
import NoorieCuddles from './components/NoorieCuddles';

function App() {
  return (
    <div className="App">
      <h1 className="heading">{'I Owe Noorie 🤭'}</h1>
      <NoorieCuddles />
      <Timer />
      <span
        style={{
          fontSize: '30px',
          position: 'absolute',
          bottom: '45px',
          marginLeft: 'auto',
          marginRight: 'auto',
          left: '45px',
          right: '0px',
          textAlign: 'center',
          color: 'white',
        }}
      >
        A Noorie Site ❤️ &copy;
      </span>
    </div>
  );
}

export default App;
