import React from 'react';
import profileImage from './img/profile_image.png';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Topic Modeling of Hydrology Literature</h1>
      <h2>Author: Mashrekur Rahman</h2>
      <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
