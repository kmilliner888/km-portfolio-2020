import React from 'react';
import './App.css';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Interests from './Components/Interests';
import Social from './Components/Social';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <About />
      <Projects />
      <Interests />
      <Social />
      <Footer />
      
    </div>
  );
}

export default App;
