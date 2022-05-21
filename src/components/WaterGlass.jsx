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
      if (now === "00:00:00") {
        setGlasses(0);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, now);

  const glass =
    glasses === 8 ? (
      <div className="shape">
        <div className="wave"></div>
        <span style={{ fontSize: '50px', color: 'red', position: 'relative' }}>
          {glasses}
        </span>
      </div>
    ) : (
      <div
        className="empty-shape"
        onClick={handleOnClick}
        style={{ cursor: 'pointer' }}
      >
        <span style={{ fontSize: '50px', color: 'red', position: 'relative' }}>
          {glasses}
        </span>
      </div>
    );

  return <div>{glass}</div>;
};

export default WaterGlass;
