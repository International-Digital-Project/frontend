import { useEffect, useState } from 'react';
import axios from 'axios';
import useApiCall from './src/ApiCall';

const Map = () => {
  const [map, setMap] = useState(null);
  const [start, setStart] = useState([0, 0]); // Fallback value
  const [end, setEnd] = useState([0, 0]); // Fallback value

  // Hook to fetch booking information
  const booking = useApiCall();
  const apiKey = 'your-google-maps-api-key';

  const geocodeAddress = async (address, apiKey) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
          address
        )}&key=${apiKey}`
      );
  
      const { results } = response.data;
  
      if (results.length > 0) {
        const { lat, lng } = results[0].geometry.location;
        return [lat, lng]; // Return an array of [latitude, longitude]
      } else {
        throw new Error('No results found for the given address');
      }
    } catch (error) {
      console.error('Error geocoding address:', error);
      throw error;
    }
  };

// Geocode alternative to Google Maps API

// const geocodeAddress = async (address, apiKey) => {
//   try {
//     const response = await axios.get(
//       `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
//         address
//       )}&key=${apiKey}`
//     );

//     const { results } = response.data;

//     if (results.length > 0) {
//       const { lat, lon } = results[0].geometry;
//       return [lat, lon]; // Return an array of [latitude, longitude]
//     } else {
//       throw new Error('No results found for the given address');
//     }
//   } catch (error) {
//     console.error('Error geocoding address:', error);
//     throw error;
//   }
// };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const senderAddress = booking.senderAddress;
        const receiverAddress = `${booking.receiverAddress.streetNumber} ${booking.receiverAddress.streetName}, ${booking.receiverAddress.city}, ${booking.receiverAddress.country}`;

        // Geocode conversion from address to lat-long coords
        const startCoordinates = await geocodeAddress(senderAddress);
        const endCoordinates = await geocodeAddress(receiverAddress);

        // Refresh routing
        setStart(startCoordinates);
        setEnd(endCoordinates);
      } catch (error) {
        console.error('Error fetching or geocoding address information:', error);
      }
    };

    fetchData();
  }, [booking]);

  return (
    <div>
    {shouldShowMap && <Map start={start} end={end} />}
  </div>
  );
};
