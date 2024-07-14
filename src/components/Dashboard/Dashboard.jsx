//  import React from 'react';
// import { Routes, Route, Link } from 'react-router-dom';
// import HealthMonitoring from '../HealthMonitoring/HealthMonitoring.jsx';
// import Alerts from '../Alerts/Alerts';
// import Profile from '../Profile/Profile';
// import Recommendations from '../Recommendations/Recommendations';
// import Settings from '../Settings/Settings.jsx';
// import "./Dashboard.css";

// const Dashboard = () => {
//   return (
//     <div>
//       <h2>Dashboard</h2>
//       <ul className="nav nav-tabs">
//         <li className="nav-item">
//           <Link className="nav-link active" to="/health-monitoring">Health Monitoring</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/alerts">Alerts</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/profile">Profile</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/recommendations">Recommendations</Link>
//         </li>
//         <li className="nav-item">
//           <Link className="nav-link" to="/Settings">Settings</Link>
//         </li>
//       </ul>
//       <div className="tab-content">
//         <Routes>
//           <Route path="health-monitoring" element={<HealthMonitoring />} />
//           <Route path="alerts" element={<Alerts />} />
//           <Route path="profile" element={<Profile />} />
//           <Route path="recommendations" element={<Recommendations />} />
//           <Route path="Settings" element={<Settings/>} />
//         </Routes>
//       </div>
//     </div>
//   );
// };

// export default Dashboard; 


//////////////////////////

import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HealthMonitoring from '../HealthMonitoring/HealthMonitoring.jsx';
import Alerts from '../Alerts/Alerts.jsx';
import Profile from '../Profile/Profile.jsx';
import Recommendations from '../Recommendations/Recommendations.jsx';
import Settings from '../Settings/Settings.jsx';
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Dashboard</h2>
      <div className="tab-navigation">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link" to="/health-monitoring">Health Monitoring</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alerts">Alerts</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recommendations">Recommendations</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="tab-content">
        <Routes>
          <Route path="/health-monitoring" element={<HealthMonitoring />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
