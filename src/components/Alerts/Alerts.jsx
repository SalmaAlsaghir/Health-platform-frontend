/* import React, { useState, useEffect } from 'react';
import "./Alerts.css";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  // Fetch alerts from API (replace with your API call)
  useEffect(() => {
    const fetchAlerts = async () => {
      const response = await fetch('https://your-api-endpoint.com/alerts');
      const data = await response.json();
      setAlerts(data);
    };
    fetchAlerts();
  }, []);

  return (
    <div>
      <h3>Alerts and Notifications</h3>
      {alerts.length === 0 ? (
        <div>No alerts found.</div>
      ) : (
        <ul>
          {alerts.map((alert) => (
            <li key={alert.id}>
              {alert.message} 
              {// Add action buttons or other interactive elements here }
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Alerts; */


import React, { useState, useEffect } from 'react';
import "./Alerts.css";

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);

  // Fetch alerts from API (replace with your API call)
  useEffect(() => {
    const fetchAlerts = async () => {
      const response = await fetch('https://your-api-endpoint.com/alerts');
      const data = await response.json();
      setAlerts(data);
    };
    fetchAlerts();
  }, []);

  return (
    <div className="alerts-container">
      <h3>Alerts and Notifications</h3>
      {alerts.length === 0 ? (
        <div className="no-alerts">No alerts found.</div>
      ) : (
        <ul>
          {alerts.map((alert) => (
            <li key={alert.id}>
              <p>{alert.message}</p>
              {/* Add action buttons or other interactive elements here */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Alerts;
