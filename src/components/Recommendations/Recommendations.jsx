/* import React from 'react';
import "./Recommendations.css";

const Recommendations = () => {
  return (
    <div>
      <h3>Recommendations</h3>
      <div>Automated health tips based on data</div>
      <div>Recommendations for lifestyle changes</div>
      <div>Direct contact with healthcare providers</div>
    </div>
  );
};

export default Recommendations; */


import React from 'react';
import "./Recommendations.css";

const Recommendations = () => {
  return (
    <div className="recommendations-container">
      <h3>Recommendations</h3>
      <div className="recommendation-item">
        <p>Automated health tips based on data</p>
      </div>
      <div className="recommendation-item">
        <p>Recommendations for lifestyle changes</p>
      </div>
      <div className="recommendation-item">
        <p>Direct contact with healthcare providers</p>
      </div>
    </div>
  );
};

export default Recommendations;
