import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import TopNav from './components/TopNav';
import SideMenu from './components/SideMenu';
import RoutesTable from './components/RoutesTable';
import Dashboard from './components/Dashboard';
import DepoRoutes from './components/DepoRoutes';
import Employees from './components/Employees';
import Vehicles from './components/Vehicles';
import Settings from './components/Settings';
import LogOut from './components/LogOut';

function App() {
  const [activePage, setActivePage] = useState('Dashboard');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleMenuClick = (menuItem) => {
    setActivePage(menuItem);
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setActivePage('Dashboard'); // Optionally reset the active page to Dashboard
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <TopNav />
      <div className="main-layout">
        <SideMenu onMenuClick={handleMenuClick} />
        <div className="content">
          {activePage === 'Dashboard' && <Dashboard />}
          {activePage === 'Schedule' && <RoutesTable />}
          {activePage === 'DepoRoutes' && <DepoRoutes />}
          {activePage === 'Employees' && <Employees />}
          {activePage === 'Vehicles' && <Vehicles />}
          {activePage === 'Settings' && <Settings />}
          {activePage === 'LogOut' && <LogOut onLogout={handleLogout} />}
        </div>
      </div>
    </div>
  );
}

export default App;
