import React from "react";
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import { Routes, Route } from "react-router-dom";
import "./i18n";
//
import Settings from "./components/Settings/Settings";
import Recommendations from "./components/Recommendations/Recommendations"; // Import Recommendations component
import Profile from "./components/Profile/Profile"; // Import Profile component
import Alerts from "./components/Alerts/Alerts"; // Import Alerts component
import HealthMonitoring from "./components/HealthMonitoring/HealthMonitoring"; // Import HealthMonitoring component


const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        {" "}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
        <Route path="/settings" element={<Settings />} />

        <Route path="/recommendations" element={<Recommendations />} /> {/* Add Recommendations route */}
        <Route path="/profile" element={<Profile />} /> {/* Add Profile route */}
        <Route path="/alerts" element={<Alerts />} /> {/* Add Alerts route */}
        <Route path="/health-monitoring" element={<HealthMonitoring />} /> {/* Add HealthMonitoring route */}
        
      </Routes>
    </div>
  );
};

export default App;

//////////////////////////////

