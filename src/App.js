import React, { useState } from 'react';
import './App.css';
import TopNav from './components/TopNav';
import SideMenu from './components/SideMenu';
import RoutesTable from './components/RoutesTable'; // Import RoutesTable component

function App() {
  const [activePage, setActivePage] = useState(''); // State to manage active page

  const handleMenuClick = (menuItem) => {
    setActivePage(menuItem); // Set active page based on menu item clicked
  };

  return (
    <div className="App">
      <TopNav />
      <div className="main-layout">
        <SideMenu onMenuClick={handleMenuClick} />
        <div className="content">
          {activePage === 'Schedule' && <RoutesTable />} {/* Conditionally render RoutesTable */}
        </div>
      </div>
    </div>
  );
}

export default App;
