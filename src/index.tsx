import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl'; 

mapboxgl.accessToken = 'sjkdfbsdnjkfbsdk';

if(!navigator.geolocation){
  alert('Tu navegador no tiene opción de Golocation');
  throw new Error('Tu navegador no tiene opción de Golocation');
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

