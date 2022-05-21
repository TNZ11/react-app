import { useState, useEffect } from 'react';
import { supabase } from '../SupabaseClient';
import WaterGlass from './WaterGlass';

const CounterButton = () => {
  const [cuddles, setCuddles] = useState();
  const [totalcuddles, setTotalCuddles] = useState();
  const [kisses, setBigKiss] = useState();
  const [glasses, setGlasses] = useState();
  const [buttonLabel, setButtonLabel] = useState('Add Cuddles');

  const html = [];

  const handleOnClick = () => {
    if (buttonLabel === 'Add Cuddles') {
      setCuddles(cuddles + 1);
      setTotalCuddles(totalcuddles + 1);
      if (cuddles >= 9) {
        setButtonLabel('Checkout');
      }
    } else {
      setCuddles(0);
      setBigKiss(kisses + 1);
      setButtonLabel('Add Cuddles');
    }
  };

  useEffect(() => {
    const updateData = async () => {
      try {
        const updates = {
          id: 1,
          cuddles,
          kisses,
          totalcuddles,
        };

        let { error } = await supabase.from('cuddlecounter').upsert(updates, {
          returning: 'minimal',
        });

        if (error) {
          throw error;
        }
      } catch (error) {
        alert(error.message);
      }
    };

    updateData();
  }, [cuddles, kisses, totalcuddles]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      let { data, error, status } = await supabase
        .from('cuddlecounter')
        .select(`cuddles, kisses, totalcuddles, glasses`)
        .eq('id', 1)
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        console.log(data);
        setCuddles(data.cuddles);
        setBigKiss(data.kisses);
        setTotalCuddles(data.totalcuddles);
        setGlasses(data.glasses);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  html.push(<p className="sub-headings">❤️ Number of Big Kisses: {kisses}</p>);

  return (
    <div>
      <p className="sub-headings">❤️ Number of Cuddles: {cuddles}</p>
      {html}
      <button
        className="cybr-btn"
        onClick={handleOnClick}
        key={`cuddles${cuddles}`}
      >
        {' '}
        {buttonLabel} <span aria-hidden>{''}</span>
        <span aria-hidden className="cybr-btn__glitch">
          Noorie
        </span>
        <span aria-hidden className="cybr-btn__tag"></span>
      </button>
      <span
        style={{
          display: 'block',
          position: 'absolute',
          alignContent: 'center',
        }}
      >
        {' '}
        <WaterGlass glasses={glasses} setGlasses={setGlasses} />{' '}
      </span>
    </div>
  );
};

export default CounterButton;
