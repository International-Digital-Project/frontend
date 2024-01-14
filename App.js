import React, { useMemo } from 'react';
import TableComponent from './TableComponent';
import HeaderBanner from './headerbanner';
//import useApiCall from './apicall';
import mockData from './mockdata.json';
import MyMapComponent from './Map';
import 'leaflet/dist/leaflet.css';
import './App.css';

function App() {
  const data = mockData;
  const columns = useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'bookingId',
      },
      {
        Header: 'Size',
        accessor: 'size',
      },
      {
        Header: 'Weight',
        accessor: 'weight',
      },
      {
        Header: 'Sender Address',
        accessor: 'senderAddress',
      },
      {
        Header: 'Street Name',
        accessor: 'receiverAddress.streetName',
      },
      {
        Header: 'Street Number',
        accessor: 'receiverAddress.streetNumber',
      },
      {
        Header: 'City',
        accessor: 'receiverAddress.city',
      },
      {
        Header: 'Zip Code',
        accessor: 'receiverAddress.zipCode',
      },
      {
        Header: 'Country',
        accessor: 'receiverAddress.country',
      },
      {
        Header: 'Name',
        accessor: 'customerName',
      },
      // {
      //   Header: 'Customer ID',
      //   accessor: 'customerId',
      // },
    ],
    []
  );

  return (
    <div className="App flexbox-container">
      <HeaderBanner />

      <div className="AppContent">
        <div className="TableContainer" id="table">
          <TableComponent data={data} columns={columns} />
        </div>
      </div>
      
      <div className="MapContainer" id="map">
          <MyMapComponent />
      </div>
    </div>
  );
}

export default App;