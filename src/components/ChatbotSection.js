import React from 'react';
import './ChatbotSection.css';
import { FiCpu, FiZap, FiTrendingUp, FiActivity } from 'react-icons/fi';

const ChatbotSection = () => {
  return (
    <div className="chatbot-section">
      <div className="chatbot-box">
        <div className="chatbot-header">
          <div className="chatbot-icon">
            <FiCpu />
          </div>
          <h3 className="chatbot-title">
            What is GPU?
          </h3>
        </div>
        
        <div className="chatbot-content">
          <div className="disclaimer">
            <p>
              <strong>🚀 GPU – Goon Processing Unit</strong> is the world's first meme-fueled hardware protocol.
            </p>
            <p>
              Instead of processing graphics, it processes <strong>dopamine cycles</strong> and <strong>terminal goon sessions</strong>.
            </p>
            <div className="specs-grid">
              <div className="spec-item">
                <FiZap className="spec-icon" />
                <span><strong>Clock Speed:</strong> 0.69 IQ</span>
              </div>
              <div className="spec-item">
                <FiActivity className="spec-icon" />
                <span><strong>Memory:</strong> Infinite red candle tabs</span>
              </div>
              <div className="spec-item">
                <FiTrendingUp className="spec-icon" />
                <span><strong>Cooling:</strong> Monster Energy & Coom</span>
              </div>
              <div className="spec-item">
                <FiCpu className="spec-icon" />
                <span><strong>Output:</strong> Pure dopamine, zero gains</span>
              </div>
            </div>
          </div>
          
          <div className="privacy-notice">
            <p>
              <strong>⚠️ By engaging with GPU, you consent to:</strong>
            </p>
            <div className="consent-list">
              <div className="consent-item">
                <span className="consent-bullet">🔥</span>
                <span>Absorbing endless losses with a smile</span>
              </div>
              <div className="consent-item">
                <span className="consent-bullet">💀</span>
                <span>Entering perma-goon mode</span>
              </div>
              <div className="consent-item">
                <span className="consent-bullet">🌐</span>
                <span>Becoming part of the global Goon Network</span>
              </div>
            </div>
          </div>
          
          <a href="https://pump.fun/coin/8kKKjzY9FiuN8feLS3hrCiCkQQjkMP3qK4zTpD4vpump" target="_blank" rel="noopener noreferrer" className="launch-agent-btn">
            Buy on Pump
          </a>
          
          <div className="technology-info">
            Built With GPU NIMs
          </div>
          
          <div className="final-disclaimer">
            GPU doesn't render frames – it renders your sanity. Join the next evolution of goon computing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatbotSection;
