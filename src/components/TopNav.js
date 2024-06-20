import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faBus } from '@fortawesome/free-solid-svg-icons';
import './TopNav.css';

function TopNavbar() {
    return (
        <div className="top-navbar">
          <div className="logo">
            <FontAwesomeIcon icon={faBus} className="bus-icon" />
            <span class="cont1">KSRTC</span>
          </div>
          <div className="user-info">
            <span>Admin</span>
            <FontAwesomeIcon icon={faUser} className="user-icon" />
          </div>
        </div>
      );
    }
export default TopNavbar;
