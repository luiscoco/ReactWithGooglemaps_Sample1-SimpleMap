import React, { useEffect } from 'react';

const loadGoogleMapsAPI = () => {
  return new Promise((resolve) => {
    if (window.google && window.google.maps) {
      resolve();
    } else {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAXV8MuLLBxxb2D1i-A-9LwPyzm7votHVM`;
      script.onload = resolve;
      document.head.appendChild(script);
    }
  });
};

const MapComponent = () => {
  useEffect(() => {
    const initMap = async () => {
      await loadGoogleMapsAPI();
      const { Map } = window.google.maps;
      const map = new Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    initMap();
  }, []);

  return <div id="map" style={{ width: '100%', height: '400px' }}></div>;
};

export default MapComponent;
