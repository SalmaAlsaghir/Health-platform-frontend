/* import React from 'react';

const Profile = () => {
  return (
    <div>
      <h3>User Profile</h3>
      <div>Personal Information</div>
      <div>Medical History</div>
      <div>Device Settings</div>
    </div>
  );
};

export default Profile; */

import React from 'react';
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-container">
      <h3>User Profile</h3>
      <div className="profile-item">
        <p>Personal Information</p>
      </div>
      <div className="profile-item">
        <p>Medical History</p>
      </div>
      <div className="profile-item">
        <p>Device Settings</p>
      </div>
    </div>
  );
};

export default Profile;

