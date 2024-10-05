import React from 'react';
import { Camera, MapPin, Award } from 'lucide-react';
import './Vision.css'; // Import your custom CSS

const VisionCard = ({ icon: Icon, title, description }) => (
  <div className="vision-card">
    <div className="icon-container">
      <Icon className="icon" />
    </div>
    <h3 className="card-title">{title}</h3>
    <p className="card-description">{description}</p>
    <button className="read-more-btn">
      Read More
    </button>
  </div>
);

const Vision = () => {
  const visionData = [
    {
      icon: Camera,
      title: "Report Issues with Ease",
      description: "Citizens can quickly report cleanliness-related issues by uploading pictures and geolocating the problem areas, ensuring accurate reporting for timely resolutions."
    },
    {
      icon: MapPin,
      title: "Track Real-time Progress",
      description: "Our platform provides real-time updates on issue resolution, tracking the status of cleanliness efforts from verification to completion, ensuring transparency."
    },
    {
      icon: Award,
      title: "Earn Rewards for Participation",
      description: "Get rewarded for contributing to urban cleanliness. Earn points for every verified report, which can be redeemed for various rewards as a token of appreciation."
    }
  ];

  return (
    <div className="vision-section">
      <h2 className="section-title">Our Vision</h2>
      <div className="vision-grid">
        {visionData.map((item, index) => (
          <VisionCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Vision;