import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { Navigation, Home, About, Projects }  from './Components';



const App = () => {
  return (
    <div className="App">
        <Navigation />
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path='/projects' component={Projects}></Route>
    </div>
  );
}

export default App;
