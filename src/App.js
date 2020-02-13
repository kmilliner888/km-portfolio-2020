import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Navigation from './Navigation';
import About from './About';
import Projects from './Projects';
import Home from './Home';
import Social from './Social';
import Footer from './Footer';



const App = () => (
    <div className="App">
        <Navigation />
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/projects' component={Projects}></Route>
        <Social />
        <Footer />

    </div>
);

export default App;
