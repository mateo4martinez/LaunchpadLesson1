import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Heading from './Components/Heading';
import DescriptionBoxes from './Components/DescriptionBoxes';

function App() {
  return (
    <div className="container">
      <Navbar/>
      <Hero/>
      {/* <Heading/> */}
      {/* <DescriptionBoxes/> */}
    </div>
  );
}

export default App;
