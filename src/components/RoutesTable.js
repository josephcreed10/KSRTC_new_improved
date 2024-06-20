import React, { useState } from 'react';
import './RoutesTable.css';

const RoutesTable = () => {
  const [routes] = useState([
    { id: 1, departureTime: '03:40:00', departurePlace: 'PSL', route: 'NH', arrivalPlace: 'KLKV', arrivalTime: '03:45:00', km: 3.5, terminalGap: '00:05:00' },
    { id: 2, departureTime: '07:55:00', departurePlace: 'PSL', route: 'NH', arrivalPlace: 'KLKV', arrivalTime: '08:05:00', km: 3.5, terminalGap: '00:10:00' },
    { id: 3, departureTime: '06:40:00', departurePlace: 'PSL', route: 'NH', arrivalPlace: 'KLKV', arrivalTime: '06:50:00', km: 3.5, terminalGap: '00:10:00' },
    { id: 4, departureTime: '04:30:00', departurePlace: 'PSL', route: 'NH', arrivalPlace: 'KLKV', arrivalTime: '04:40:00', km: 3.5, terminalGap: '00:10:00' },
    { id: 5, departureTime: '12:45:00', departurePlace: 'PSL', route: 'NH', arrivalPlace: 'KLKV', arrivalTime: '12:55:00', km: 3.5, terminalGap: '00:10:00' },
    { id: 6, departureTime: '05:05:00', departurePlace: 'PSL', route: 'NH', arrivalPlace: 'KLKV', arrivalTime: '05:15:00', km: 3.5, terminalGap: '00:10:00' },
    { id: 7, departureTime: '05:15:00', departurePlace: 'PSL', route: 'NH', arrivalPlace: 'KLKV', arrivalTime: '05:25:00', km: 3.5, terminalGap: '00:10:00' },
    { id: 8, departureTime: '05:20:00', departurePlace: 'PSL', route: 'NH', arrivalPlace: 'KLKV', arrivalTime: '06:40:00', km: 3.5, terminalGap: '00:10:00' },
  ]);

  return (
    <div className="routes-container">
      <h2>Trip 1</h2>
      <input type="text" className="search" placeholder="Search" />
      <button className="generate-button">Regenerate</button>
      <table className="routes-table">
        <thead>
          <tr>
            <th>Trip No.</th>
            <th>Dep. Time</th>
            <th>Dep. Place</th>
            <th>Route</th>
            <th>Arr. Place</th>
            <th>Arr. Time</th>
            <th>Distance in KM</th>
            <th>Terminal Gap</th>
          </tr>
        </thead>
        <tbody>
          {routes.map((route, index) => (
            <tr key={route.id}>
              <td>{index + 1}</td>
              <td>{route.departureTime}</td>
              <td>{route.departurePlace}</td>
              <td>{route.route}</td>
              <td>{route.arrivalPlace}</td>
              <td>{route.arrivalTime}</td>
              <td>{route.km}</td>
              <td>{route.terminalGap}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="summary-container">
        <div>Sign On: 3:25</div>
        <div>Sign Off: 12:00</div>
        <div>Hours of Work: 8:35</div>
        <div>Total KM: 184.7</div>
        <div>Spread Over: 8:35</div>
        <div>OverTime (OT): 0:35</div>
      </div>
    </div>
  );
};

export default RoutesTable;
