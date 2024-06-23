import React from 'react';
import './Dashboard.css';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Dashboard() {
  return (
    <div>
    <div className="tables">
      <table>
        <tbody>
          <tr>
            <th>Depot</th>
            <td>Parassala / PSL</td>
          </tr>
          <tr>
            <th>Zone</th>
            <td>South</td>
          </tr>
          <tr>
            <th>District</th>
            <td>Thiruvananthapuram / TVM</td>
          </tr>
          <tr>
            <th>Depot manager</th>
            <td>Sri. Idk his name</td>
          </tr>
          <tr>
            <th>Contact number</th>
            <td>+91 0471-2202058</td>
          </tr>
          <tr>
            <th>Number of employees</th>
            <td>20</td>
          </tr>
          <tr>
            <th>Number of buses</th>
            <td>30</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className='generate-button'>
    <Button variant="contained" color="success">Click here to upload files</Button>
    </div>
    </div>
  );
}

export default Dashboard;
