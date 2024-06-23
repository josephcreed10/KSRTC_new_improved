import React, { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import SideMenu from './components/SideMenu';
import RoutesTable from './components/RoutesTable'; // Import RoutesTable component
import Dashboard from './components/Dashboard';
import DepoRoutes from './components/DepoRoutes';
import Employees from './components/Employees';
import Vehicles from './components/Vehicles';
import Settings from './components/Settings';
import LogOut from './components/LogOut';

function App() {
  const [activePage, setActivePage] = useState('Dashboard'); // State to manage active page

  const handleMenuClick = (menuItem) => {
    console.log(`Menu item clicked: ${menuItem}`);
    setActivePage(menuItem); // Set active page based on menu item clicked
  };

  return (
    <div className="App">
      <TopNav />
      <div className="main-layout">
        <SideMenu onMenuClick={handleMenuClick} />
        <div className="content">
          {activePage === 'Dashboard' && <Dashboard />}
          {activePage === 'Schedule' && <RoutesTable />} {/* Conditionally render RoutesTable */}
          {activePage === 'DepoRoutes' && <DepoRoutes />}
          {activePage === 'Employees' && <Employees />}
          {activePage === 'Vehicles' && <Vehicles />}
          {activePage === 'Settings' && <Settings />}
          {activePage === 'LogOut' && <LogOut />}
        </div>
      </div>
    </div>
  );
}

export default App;
