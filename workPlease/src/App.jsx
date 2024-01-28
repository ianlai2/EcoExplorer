import { useRef } from 'react';
import React from 'react';
import AppRouter from './AppRouter';
import './Navbar.css'; 
import Navbar from './navbar';


function App() {
  return (
    <div style={{ backgroundColor: '#FFF8C8' }}>
      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
