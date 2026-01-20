import React, { useEffect, useRef } from 'react';
import L from 'leaflet';

const Map: React.FC = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapInstanceRef.current) return;

    // Kasoa Coordinates (Approximate for Nurses Quarters context)
    const lat = 5.5560;
    const lng = -0.4190;

    const map = L.map(mapContainerRef.current, {
        scrollWheelZoom: false, // Prevent scrolling page from zooming map immediately
    }).setView([lat, lng], 14);

    mapInstanceRef.current = map;

    // Dark/Muted styled tiles for better UI integration or standard OSM
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Custom Marker Icon
    const customIcon = L.divIcon({
      className: 'custom-marker',
      html: `
        <div style="
          background-color: #0d3880; 
          width: 40px; 
          height: 40px; 
          border-radius: 50% 50% 50% 0; 
          transform: rotate(-45deg);
          border: 3px solid white; 
          display: flex; 
          align-items: center; 
          justify-content: center; 
          box-shadow: 0 4px 10px rgba(0,0,0,0.4);
        ">
          <div style="
            background-color: #4abf53; 
            width: 12px; 
            height: 12px; 
            border-radius: 50%;
            transform: rotate(45deg);
          "></div>
        </div>
      `,
      iconSize: [40, 40],
      iconAnchor: [20, 40], // Point of the icon which will correspond to marker's location
      popupAnchor: [0, -40]
    });

    // Add Marker
    L.marker([lat, lng], { icon: customIcon })
      .addTo(map)
      .bindPopup(`
        <div style="text-align: center; font-family: sans-serif;">
          <strong style="color: #0d3880; font-size: 14px;">Adlai Community Hospital</strong><br/>
          <span style="font-size: 12px; color: #555;">Nurses Quarters, Kasoa</span>
        </div>
      `)
      .openPopup();

    return () => {
      map.remove();
      mapInstanceRef.current = null;
    };
  }, []);

  return <div ref={mapContainerRef} className="w-full h-full min-h-[400px]" style={{ zIndex: 0 }} />;
};

export default Map;