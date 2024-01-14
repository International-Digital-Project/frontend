
import axios from 'axios';

async function useApiCall() {
  try {
    const data = await axios.get("http://localhost:8080/tracking");
    return data;
  } catch(err) {
    console.log("error: ", err);
  }
}
export default useApiCall;

// import { useState, useEffect } from 'react';

// function useApiCall() {
//   const [booking, setBooking] = useState([]);
//   const [retryCount, setRetryCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://localhost:8080/tracking');
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         setBooking(data);
//         setRetryCount(0); // Reset retry on success.
//       } catch (error) {
//         console.error(error);
//         if (retryCount < 5) {
//           const backoffDelay = Math.pow(1.5, retryCount) * 1000;
//           setTimeout(() => {
//             setRetryCount((prevRetryCount) => prevRetryCount + 1);
//           }, backoffDelay);
//         }
//       }
//     };

//     fetchData();
//   }, [retryCount]);

//   return booking;
// }

// export default useApiCall;



//  import { useState, useEffect } from 'react';
//  import axios from 'axios';

//  function useApiCall() {
//    const [booking, setBooking] = useState([]);

//    useEffect(() => {
//      axios.get('http://localhost:8080/tracking')
//        .then(response => {
//          setBooking(response.data);
//        })
//        .catch(error => {
//          console.error(error);
//        });
//    }, []);

//    return booking;
//  }

//  export default useApiCall;


// This is for multiple API fetches:

// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function useApiCall(apiUrl) {
//   const [data, setData] = useState({ booking: [], loading: true, error: null });

//   useEffect(() => {
//     axios.get(apiUrl)
//       .then(response => {
//         setData({ booking: response.data, loading: false, error: null });
//       })
//       .catch(error => {
//         console.error(error);
//         setData({ booking: [], loading: false, error });
//       });
//   }, [apiUrl]);

//   return data;
// }

// export default useApiCall;