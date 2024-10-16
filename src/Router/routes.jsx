import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Config from '../Config/config';
import Dashboard from '../Dashboard/dashboard';
import TrafficLane from '../TrafficLane/trafficelane';
import Login from '../Login/login';
const AppRoutes = () => {
    return (
      <Router>
        <Routes>
          <Route path="/config" element={<Config />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/traffic-lane-section" element={<TrafficLane />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    );
  };
  
  export default AppRoutes;