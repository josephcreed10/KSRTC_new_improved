import React from "react";
import Button from '@mui/material/Button';
import "./LogOut.css";

function LogOut({ onLogout }) {
    return (
        <div className="LogoutSection">
            <div className="LogoutNotice">
                <h1>Are you sure you want to logout?</h1>
            </div>
            <div className="LogoutButtons">
                <Button variant="contained" color="success" onClick={onLogout}>Log out</Button>
                <Button variant="outlined" color="error">Cancel</Button>
            </div>
        </div>
    );
}

export default LogOut;
