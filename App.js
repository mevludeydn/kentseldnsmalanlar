import React, { useEffect, useState } from 'react';
import Map from './Map';
import fetchKentselDonusumAlanlari from './api';

const App = () => {
  const [kentselDonusumAlanlari, setKentselDonusumAlanlari] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchKentselDonusumAlanlari();
        setKentselDonusumAlanlari(data);
      } catch (error) {
        // Handle error
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Kentsel Dönüşüm Alanları Haritası</h1>
      <Map kentselDonusumAlanlari={kentselDonusumAlanlari} />
    </div>
  );
};

export default App;
