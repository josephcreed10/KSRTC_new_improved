import React, { useState } from "react";
import Button from '@mui/material/Button';
import "./Dashboard.css";

function Dashboard() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    depotOffice: '',
    ato: '',
    district: ''
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isUploadEnabled, setIsUploadEnabled] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
    setIsUploadEnabled(true);
    setShowForm(false);
  };

  const handleEditClick = () => {
    setShowForm(true);
    setIsFormSubmitted(false);
  };

  return (
    <div className="DashboardSection">
      <div className="DashboardButtons">
        <Button 
          variant="contained" 
          color="success" 
          onClick={() => setShowForm(true)} 
          disabled={isFormSubmitted}
        >
          Enter profile details
        </Button>
        <Button 
          variant="contained" 
          color="success" 
          disabled={!isUploadEnabled}
        >
          Upload files
        </Button>
      </div>
      
      {showForm ? (
        <form className="ProfileForm" onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="depotOffice">Depot Office:</label>
            <input
              type="text"
              id="depotOffice"
              name="depotOffice"
              value={formData.depotOffice}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="ato">ATO:</label>
            <input
              type="text"
              id="ato"
              name="ato"
              value={formData.ato}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <label htmlFor="district">District:</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              required
            />
          </div>
          <Button type="submit" variant="contained" color="primary">Save</Button>
        </form>
      ) : (
        isFormSubmitted && (
          <div className="ProfileDetails">
            <h2>Profile Details</h2>
            <p><strong>Depot Office:</strong> {formData.depotOffice}</p>
            <p><strong>ATO:</strong> {formData.ato}</p>
            <p><strong>District:</strong> {formData.district}</p>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleEditClick}
            >
              Edit
            </Button>
          </div>
        )
      )}
    </div>
  );
}

export default Dashboard;
