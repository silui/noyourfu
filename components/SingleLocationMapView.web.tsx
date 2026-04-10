import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

// Fix broken default marker icons — must run in browser only
if (typeof window !== 'undefined') {
  const L = require('leaflet');
  delete L.Icon.Default.prototype._getIconUrl;
  L.Icon.Default.mergeOptions({
    iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
    iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  });
}

export default function SingleLocationMapView({
  latitude,
  longitude,
  pin_name,
  pin_description,
}: {
  latitude: number;
  longitude: number;
  pin_name: string;
  pin_description: string;
}) {
  // Guard against SSR — Leaflet requires browser APIs
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  if (!isClient) {
    return <View style={{ flex: 1, backgroundColor: '#e5e5e5' }} />;
  }

  // Lazy-require so Leaflet components never run during static export
  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');

  return (
    <MapContainer
      center={[latitude, longitude]}
      zoom={15}
      style={{ width: '100%', height: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          <strong>{pin_name}</strong>
          <br />
          {pin_description}
        </Popup>
      </Marker>
    </MapContainer>
  );
}
