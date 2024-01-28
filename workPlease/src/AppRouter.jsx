import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Location from './Location';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/about' element={ <About/> } />
        <Route path='/location' element={ <Location/> } />
      </Routes>
    </Router>
  );
};

export default AppRouter;