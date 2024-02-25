import React from 'react';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

const Map = ({ kentselDonusumAlanlari }) => {
  return (
    <MapContainer
      center={[41.0123, 28.9768]}
      zoom={12}
      style={{ height: '500px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {kentselDonusumAlanlari.map((alan, index) => (
        <Marker key={index} position={[alan.lat, alan.lng]}>
          {/* İsteğe bağlı: Marker içine özel içerik eklenebilir */}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
