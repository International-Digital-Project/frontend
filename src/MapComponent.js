// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

// function MapComponent({ navigationData }) {
//   return (
//     <MapContainer
//       center={[49.87167, 8.65027]}
//       zoom={9}
//       style={{ height: '100%', width: '100%' }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />

//       {navigationData.map((navPoint) => (
//         <Marker
//           key={navPoint.id}
//           position={[navPoint.latitude, navPoint.longitude]}
//         >
//           <Popup>{navPoint.name}</Popup>
//         </Marker>
//       ))}
//     </MapContainer>
//   );
// }

// export default MapComponent;
