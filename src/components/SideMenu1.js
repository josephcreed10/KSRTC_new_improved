import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBus, faUserTie, faClipboard, faCogs, faSignOutAlt, faRoad, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import './SideMenu.css';

function SideMenu({ onMenuClick }) {
  return (
    <div className="bg-white text-gray-700 h-full fixed top-16 w-64 z-40">
      <ul className="menu-list">
        <li onClick={() => onMenuClick('Dashboard')} className="p-4 hover:bg-gray-600">
          <FontAwesomeIcon icon={faTachometerAlt} className="menu-icon" />
          <span>Dashboard</span>
        </li>
        <li onClick={() => onMenuClick('Schedule')} className="p-4 hover:bg-gray-600">
          <FontAwesomeIcon icon={faClipboard} className="menu-icon" />
          <span>Schedule</span>
        </li>
        <li onClick={() => onMenuClick('DepoRoutes')} className="p-4 hover:bg-gray-600">
          <FontAwesomeIcon icon={faRoad} className="menu-icon" />
          <span>Depo Routes</span>
        </li>
        <li onClick={() => onMenuClick('Employees')} className="p-4 hover:bg-gray-600">
          <FontAwesomeIcon icon={faUserTie} className="menu-icon" />
          <span>Employees</span>
        </li>
        <li onClick={() => onMenuClick('Vehicles')} className="p-4 hover:bg-gray-600">
          <FontAwesomeIcon icon={faBus} className="menu-icon" />
          <span>Vehicles</span>
        </li>
        <li onClick={() => onMenuClick('Settings')} className="p-4 hover:bg-gray-600">
          <FontAwesomeIcon icon={faCogs} className="menu-icon" />
          <span>Settings</span>
        </li>
        <li onClick={() => onMenuClick('LogOut')} className="p-4 hover:bg-gray-600">
          <FontAwesomeIcon icon={faSignOutAlt} className="menu-icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}

export default SideMenu;
