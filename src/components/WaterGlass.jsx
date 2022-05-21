import { useState, useEffect } from 'react';
import { supabase } from './../SupabaseClient';
import moment from 'moment';
import './../App.css';

const WaterGlass = ({ glasses, setGlasses }) => {
  const [now, setNow] = useState(moment(new Date()).format('HH:mm:ss'));

  const handleOnClick = () => {
    setGlasses(glasses + 1);
  };

  useEffect(() => {
    const updateData = async () => {
      try {
        const updates = {
          id: 1,
          glasses,
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
  }, [glasses]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment(new Date()).format('HH:mm:ss'));
      if (now === '00:00:00') {
        setGlasses(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [now]);

  const colour = glasses <= 5 ? 'red' : '#FFBF00';

  const glass =
    glasses === 8 ? (
      <div className="shape">
        <div className="wave"></div>
        <span style={{ fontSize: '50px', color: 'darkgreen', position: 'relative', border: `solid 4px darkgreen`,  padding: '20px', borderRadius: '50%', fontFamily: 'Courier New, monospace',
            fontWeight: 'bold' }}>
          {glasses}
        </span>
      </div>
    ) : (
      <div
        className="empty-shape"
        onClick={handleOnClick}
        style={{ cursor: 'pointer' }}
      >
        <span
          style={{
            fontSize: '50px',
            color: colour,
            position: 'relative',
            border: `solid 4px ${colour}`,
            padding: '20px',
            borderRadius: '50%',
            fontFamily: 'Courier New, monospace',
            fontWeight: 'bold'
          }}
        >
          {glasses}
        </span>
      </div>
    );

  return <div>{glass}</div>;
};

export default WaterGlass;
