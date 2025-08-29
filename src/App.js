import React from 'react';
import './App.css';
import Header from './components/Header';
import VideoSection from './components/VideoSection';
import ChatbotSection from './components/ChatbotSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <div className="content-wrapper">
          <VideoSection />
          <ChatbotSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
