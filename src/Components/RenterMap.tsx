import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvent, useMap } from 'react-leaflet';
import type { MapContainerProps, TileLayerProps } from 'react-leaflet';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaArrowLeft } from 'react-icons/fa';
import { MdMyLocation } from 'react-icons/md';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useNavigate } from 'react-router-dom';

// Fix for default Leaflet marker icons (for proper marker display)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

interface Location {
  lat: number;
  lng: number;
  price: number;
}

const ClickHandler = ({ setMarkers }: { setMarkers: React.Dispatch<React.SetStateAction<Location[]>> }) => {
  useMapEvent("click", (e: L.LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setMarkers([{ lat, lng, price: 1500.0 }]);
  });
  return null;
};

// Helper component to keep popup above New Delhi marker
const PricePopup = ({ marker, price, onClick }: { marker: Location, price: number, onClick?: () => void }) => {
  const map = useMap();
  const [popupPosition, setPopupPosition] = React.useState<{ left: number; top: number } | null>(null);

  React.useEffect(() => {
    const updatePopupPosition = () => {
      const point = map.latLngToContainerPoint([marker.lat, marker.lng]);
      setPopupPosition({ left: point.x, top: point.y });
    };
    updatePopupPosition();
    map.on('move', updatePopupPosition);
    map.on('zoom', updatePopupPosition);
    return () => {
      map.off('move', updatePopupPosition);
      map.off('zoom', updatePopupPosition);
    };
  }, [map, marker]);

  if (!popupPosition) return null;
  return (
    <div
      className="pointer-events-auto"
      style={{
        position: 'absolute',
        left: popupPosition.left,
        top: popupPosition.top - 50, // adjust for popup height
        transform: 'translate(-50%, -100%)',
        zIndex: 1000,
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <div className="flex flex-col items-center">
        <div className="bg-rose-700 border-2 border-white text-white rounded-xl px-6 py-2 text-xl font-bold shadow-lg flex items-center justify-center min-w-[120px]">
          ₹{price.toFixed(2)}
        </div>
        {/* Triangle */}
        <div className="w-0 h-0 border-l-8 border-r-8 border-t-[16px] border-l-transparent border-r-transparent border-t-rose-700"></div>
      </div>
    </div>
  );
};

const RenterMap = () => {
  const [markers, setMarkers] = useState<Location[]>([
    { lat: 28.6139, lng: 77.2090, price: 1500.0 }, // New Delhi
  ]);
  const mapRef = React.useRef<any>(null);
  const [showDetails, setShowDetails] = useState(false);

  const mapContainerProps: MapContainerProps = {
    center: [28.6139, 77.2090], // New Delhi coordinates
    zoom: 13,
    style: { height: '100%', width: '100%' }
  };

  const tileLayerProps: TileLayerProps = {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">Aajao</a>',
    url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  };

  return (
    <div className="bg-gradient-to-br from-rose-50 to-rose-100 md:min-h-screen md:flex md:items-center md:justify-center md:px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="w-screen h-screen flex flex-col md:w-full md:max-w-7xl md:rounded-xl md:overflow-hidden md:shadow-lg md:border md:border-rose-700"
      >
        {/* Header */}
        <div className="bg-rose-700 py-4 flex items-center justify-center gap-2">
          <FaMapMarkedAlt className="text-2xl text-white" />
          <h2 className="text-xl font-semibold text-white">Interactive Map</h2>
        </div>

        {/* Map Section */}
        <div className="w-full relative flex-grow md:h-[75vh]">
          <MapContainer {...mapContainerProps} ref={mapRef}>
            <TileLayer {...tileLayerProps} />
            <ClickHandler setMarkers={setMarkers} />
            {markers.map((marker, i) => (
              <Marker
                key={i}
                position={[marker.lat, marker.lng]}
              />
            ))}
            {/* Always show Custom Price Popup above New Delhi marker */}
            <PricePopup marker={markers[0]} price={markers[0].price} onClick={() => setShowDetails(true)} />
          </MapContainer>
          <LocateMeButton mapRef={mapRef} setMarkers={setMarkers} />
          {showDetails && <PropertyDetailsModal onClose={() => setShowDetails(false)} />}
        </div>

        {/* Back Button */}
        <div className="bg-white py-4 flex justify-center">
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-2 bg-rose-700 text-white rounded-lg hover:bg-rose-800 transition"
          >
            <FaArrowLeft />
            Go Back
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Floating button to detect and center on user's location
const LocateMeButton = ({ mapRef, setMarkers }: { mapRef: React.RefObject<any>, setMarkers: React.Dispatch<React.SetStateAction<Location[]>> }) => {
  const handleLocate = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          if (mapRef.current) {
            const map = mapRef.current;
            const leafletMap = map.leafletElement || map;
            leafletMap.setView([latitude, longitude], leafletMap.getZoom(), { animate: true });
          }
          setMarkers([{ lat: latitude, lng: longitude, price: 1500.0 }]);
        },
        () => {
          alert('Location access denied or unavailable.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  };
  return (
    <button
      onClick={handleLocate}
      className="absolute bottom-6 right-6 z-[1100] bg-white rounded-xl shadow-lg p-3 flex items-center justify-center hover:bg-rose-50 transition border border-gray-200"
      style={{ width: 56, height: 56 }}
      title="Detect my location"
    >
      <MdMyLocation className="text-3xl text-rose-700" />
    </button>
  );
};

// Modal/Card for property details
const PropertyDetailsModal = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  const handleArrowClick = () => {
    navigate('/property-details');
  };
  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 relative animate-fadeIn">
        <button onClick={onClose} className="absolute top-2 right-3 text-2xl  text-gray-400 hover:text-rose-700">&times;</button>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Cheeta house" className="rounded-xl w-full h-40 object-cover mb-3" />
        <div className="text-lg font-bold mb-1">Cheeta house</div>
        <div className="text-base font-semibold mb-2">Price: <span className="text-rose-700">2399.00</span></div>
        <div className="text-gray-600 mb-3 text-sm">My home has a warm and inviting atmosphere, with a lot of natural light filtering through large windows.</div>
        <div className="flex flex-wrap gap-2 mb-3">
          <span className="bg-rose-100 text-rose-700 rounded-xl px-4 py-1 text-xs font-semibold">featured</span>
          <span className="bg-rose-100 text-rose-700 rounded-xl px-4 py-1 text-xs font-semibold">hot</span>
          <span className="bg-rose-100 text-rose-700 rounded-xl px-4 py-1 text-xs font-semibold">trending</span>
          <span className="bg-rose-100 text-rose-700 rounded-xl px-4 py-1 text-xs font-semibold">offers</span>
        </div>
        <div className="flex items-center gap-3 mt-4">
          <div className="flex items-center bg-gray-200 rounded-xl px-6 py-2 min-w-[200px]">
            <span className="flex items-center gap-2 text-gray-700 text-base font-medium">
              <svg xmlns='http://www.w3.org/2000/svg' className='inline-block' width='20' height='20' fill='currentColor' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>
              1 Guest
            </span>
            <span className="text-gray-700 text-base font-medium ml-6">1D/1N</span>
          </div>
          <button className="bg-rose-700 rounded-full w-12 h-12 flex items-center justify-center ml-14 shadow-md hover:bg-rose-800 transition" onClick={handleArrowClick}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white' strokeWidth='2' className='w-6 h-6'><path strokeLinecap='round' strokeLinejoin='round' d='M9 5l7 7-7 7' /></svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RenterMap;
