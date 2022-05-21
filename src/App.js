import { React, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Timer from './components/Timer';
import CounterButton from './components/CounterButton';
import WaterGlass from './components/WaterGlass';
import Banner from './components/Banner';

function App() {
  const [cuddles, setCuddles] = useState();
  const [totalcuddles, setTotalCuddles] = useState();
  const [kisses, setBigKiss] = useState();
  const [glasses, setGlasses] = useState();
  const [buttonLabel, setButtonLabel] = useState('Add Cuddles');

  return (
    <div className="App">
      <h1 className="heading">{'I Owe Noorie 🤭'}</h1>
      <CounterButton
        cuddles={cuddles}
        setCuddles={setCuddles}
        totalcuddles={totalcuddles}
        setTotalCuddles={setTotalCuddles}
        kisses={kisses}
        setBigKiss={setBigKiss}
        glasses={glasses}
        setGlasses={setGlasses}
        buttonLabel={buttonLabel}
        setButtonLabel={setButtonLabel}
      />
      <Timer />
      <span style={{ marginTop: '200px', marginLeft: '415px' }}>
        <Banner glasses={glasses} />
        <WaterGlass glasses={glasses} setGlasses={setGlasses} />{' '}
      </span>
      <span
        style={{
          fontSize: '30px',
          position: 'relative',
          textAlign: 'center',
          color: 'white',
          fontFamily: 'Courier New, monospace',
          fontWeight: 'bold',
          padding: '300px',
        }}
      >
        A Noorie Site ❤️ &copy;
      </span>
    </div>
  );
}

export default App;
