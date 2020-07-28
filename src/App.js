import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
import Heading from "./components/heading"
import AnimatedVideo from "./components/animatedVideo"
import AnimatedLogo from "./components/animatedLogo"
import Controltext from "./components/controltext"
import LaptopIcon from "./components/laptopIcon"
import Ipodanimation from "./components/ipodanimation"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Heading />
      <AnimatedVideo />
      <AnimatedLogo />
      <Controltext/>
      <LaptopIcon />
      <Ipodanimation />
     
    </div>
  );
}

export default App;
