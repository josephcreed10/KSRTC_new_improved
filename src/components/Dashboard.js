import React, { useState } from 'react';
import './Dashboard.css';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function Dashboard() {
  const [open, setOpen] = useState(false);
  const [file1, setFile1] = useState(null);
  const [file2, setFile2] = useState(null);
  const [file3, setFile3] = useState(null);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFileChange = (event, setter) => {
    const file = event.target.files[0];
    setter(file);
  };

  const handleUpload = () => {
    // Implement upload logic here
    console.log('Uploading files:', file1, file2, file3);
    // Close modal after upload
    handleClose();
  };

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
        <Button variant="contained" color="success" onClick={handleOpen}>
          Click here to upload files
        </Button>
      </div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <h2>Upload the three files here</h2>
          <div>
            <label>Routes list:</label>
            <input type="file" onChange={(e) => handleFileChange(e, setFile1)} />
          </div><br />
          <div>
            <label>Employees list:</label>
            <input type="file" onChange={(e) => handleFileChange(e, setFile2)} />
          </div><br />
          <div>
            <label>Vehicles list:</label>
            <input type="file" onChange={(e) => handleFileChange(e, setFile3)} />
          </div>
          <div style={{ marginTop: '20px' }}>
            <Button variant="contained" color="success" onClick={handleUpload}>
              Upload
            </Button>
            <Button variant="outlined" color="error" onClick={handleClose} style={{ marginLeft: '10px' }}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default Dashboard;
