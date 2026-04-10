import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Restaurant } from '@/constants/Food';

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

// Child component that auto-fits the map to show all markers
function FitBounds({ restaurants }: { restaurants: Restaurant[] }) {
  const { useMap } = require('react-leaflet');
  const map = useMap();
  useEffect(() => {
    if (restaurants.length === 0) return;
    const bounds = restaurants.map(r => [r.latitude, r.longitude] as [number, number]);
    map.fitBounds(bounds, { padding: [48, 48] });
  }, []);
  return null;
}

export default function ClusterLocationMapView({ restaurants }: { restaurants: Restaurant[] }) {
  // Guard against SSR — Leaflet requires browser APIs
  const [isClient, setIsClient] = useState(false);
  useEffect(() => { setIsClient(true); }, []);

  if (!isClient) {
    return <View style={{ flex: 1, backgroundColor: '#e5e5e5' }} />;
  }

  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');

  return (
    <MapContainer
      // Default center: Taiwan
      center={[23.5, 121.0]}
      zoom={8}
      style={{ width: '100%', height: '100%' }}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitBounds restaurants={restaurants} />
      {restaurants.map(r => (
        <Marker key={r.id} position={[r.latitude, r.longitude]}>
          <Popup>
            <strong>{r.name_en}</strong>
            <br />
            {r.address}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
