/* import React from 'react';

const Settings = () => {
  return (
    <div>
      <h3>Settings</h3>
      <div>Language Preferences: Arabic/English</div>
      <div>Privacy Settings</div>
      <div>Device Management</div>
    </div>
  );
};

export default Settings; */

//import React from "react";

import React from 'react';
import "./Settings.css";

const Settings = () => {
  return (
    <div className="settings-container">
      <h3 className="settings-heading">Settings</h3>
      <div className="settings-section language">
        <h4>Language Preferences</h4>
        <p>Arabic/English</p>
      </div>
      <div className="settings-section privacy">
        <h4>Privacy Settings</h4>
      </div>
      <div className="settings-section device">
        <h4>Device Management</h4>
      </div>
    </div>
  );
};

export default Settings;
