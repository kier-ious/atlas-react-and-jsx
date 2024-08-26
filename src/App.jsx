import React from 'react';
import Greeting from './components/Greeting';
import SocialLinks from './components/SocialLinks';
import './App.css';


function App() {
return (
  <div className="app-container">
    <Greeting className="greeting"/>
    <SocialLinks className="social-links"/>
  </div>
  );
}

export default App;
