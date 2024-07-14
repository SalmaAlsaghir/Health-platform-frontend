import React from 'react';
import './HealthMonitoring.css';

const HealthMonitoring = () => {
  return (
    <div className="health-monitoring-container">
      <h2 className="dashboard-heading">Health Monitoring</h2>
      <div className="monitoring-sections">
        <div className="monitoring-section">
          <div className="section-box green">
            <h3>Real-time data display</h3>
            <p>Displaying live health metrics...</p>
          </div>
        </div>
        <div className="monitoring-section">
          <div className="section-box blue">
            <h3>Historical data analysis</h3>
            <p>Analyzing past health data...</p>
          </div>
        </div>
        <div className="monitoring-section">
          <div className="section-box red">
            <h3>Symptom Checker</h3>
            <p>Checking current symptoms...</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthMonitoring;
