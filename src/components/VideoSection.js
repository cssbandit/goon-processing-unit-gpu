import React from 'react';
import './VideoSection.css';

const VideoSection = () => {
  return (
    <div className="video-section">
      <h1 className="main-title">GPU – Goon Processing Unit</h1>
      
      <div className="video-container">
                 <div className="video-player">
           <div className="video-frame">
             <img src="/design-image.png" alt="GPU Design" className="design-image" />
           </div>
         </div>
        
                 <div className="keynote-details">
           <div className="keynote-logo">
             <img src="/logo.png" alt="GPU Logo" className="keynote-logo-image" />
           </div>
           <div className="keynote-text">
             <div className="keynote-date">August 2025</div>
             <div className="keynote-label">Goon Keynote</div>
           </div>
         </div>
      </div>
    </div>
  );
};

export default VideoSection;
