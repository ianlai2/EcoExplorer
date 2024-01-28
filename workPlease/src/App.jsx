import { useRef } from 'react';
import React from 'react';
import logo from './imgs/logo.png';
import flower1 from './imgs/flower1.png';
import flower2 from './imgs/flower2.png';
import flower3 from './imgs/flower3.png';
import flower4 from './imgs/flower4.png';
import flower5 from './imgs/flower5.png';
import flower6 from './imgs/flower6.png';
import Navbar from './navbar';
import { Dropdown } from 'primereact/dropdown';
import Dropdown from './dropdown.jsx';
        

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

const Home = () => {
    const ref = useRef();
    return (
        <div style={{ backgroundColor: '#FFF8C8' }}>
          <Navbar/>
          <Parallax pages={4} ref={ref} style={{overflowX: 'hidden'}}>
            <ParallaxLayer
            offset={0.2}
            speed={0.8}
            factor={1}
            style={{ backgroundImage: `url(${flower1})`, backgroundSize: '210px', marginLeft: '10%' }}/>
    
            <ParallaxLayer
            offset={0.7}
            speed={2.5}
            factor={1}
            style={{ backgroundImage: `url(${flower2})`, backgroundSize: '240px', marginLeft: '23%' }}/>
    
            <ParallaxLayer
            offset={0.27}
            speed={0.6}
            style={{ backgroundImage: `url(${flower3})`, backgroundSize: '160px', marginLeft: '83%' }}/>
    
            <ParallaxLayer
            offset={0.42}
            speed={1.1}
            style={{ backgroundImage: `url(${flower4})`, backgroundSize: '93px', marginLeft: '6%' }}/>
    
            <ParallaxLayer
            offset={0.66}
            speed={2}
            style={{ backgroundImage: `url(${flower5})`, backgroundSize: '270px', marginLeft: '72%' }}/>
    
            <ParallaxLayer
            offset={0.1}
            speed={0.5}
            style={{ backgroundImage: `url(${flower6})`, backgroundSize: '150px', marginLeft: '47%' }}/>
    
            <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundImage: `url(${flower3})`, backgroundSize: '160px', marginLeft: '87%' }}/>
    
            <ParallaxLayer
            offset={1.2}
            speed={2.5}
            style={{ backgroundImage: `url(${flower5})`, backgroundSize: '200px', marginLeft: '10%' }}/>
    
            <ParallaxLayer sticky={{ start: 0.3, end: 0.85 }} style={{ display: 'flex ', justifyContent: 'center'}}>
              <img src={logo} alt="logo" style={{ display: 'block', maxWidth: "840.75px", maxHeight: '167.25px' }}/>
            </ParallaxLayer>
    
            <ParallaxLayer offset={0.45}>
              <h3>Explore, Play, and Grow with EcoExplorer - where soil sensors meet fun, unlocking the secrets of your local ecosystem!</h3>
            </ParallaxLayer>
    
            <ParallaxLayer sticky={{ start: 1.1, end: 1.1 }} style={{ marginLeft: '10%' }}>
              <h2 style={{ fontSize: '50px' }}>About</h2>
            </ParallaxLayer>
            
            <ParallaxLayer sticky={{ start: 1.1, end: 1.1 }} style={{ marginLeft: '30%' }}>
              <div style={{ fontSize: '150%', display: 'block', width: '55%', height: 'auto', textAlign: 'justify'}}>
                Welcome to EcoExplorer, where the magic of nature comes to life! 🌿 
                Get ready for an amazing journey into your local world. Our special tool, the "Soil Moisture Sensor," 
                is like a superhero gadget that lets you talk to the ground and discover the secrets of your natural neighborhood. 
                Are you ready for an adventure? Let's explore together and learn the coolest things about the great outdoors! 🌍🔍✨
              </div>
              <pre>
                {"\n"}
              </pre>
              <div style={{ fontSize: '150%', display: 'block', width: '55%', height: 'auto', textAlign: 'justify'}}>
              We mix hands-on adventures with tech magic to help you understand and protect nature. 
              By exploring with EcoExplorer, you're not just having a blast – you're becoming a superhero for your local world! 
              Let's go on this exciting journey together and make our planet a better place!
              </div>
            </ParallaxLayer>

            <ParallaxLayer sticky={{ start: 1.8, end: 3}} style={{ marginLeft: '10%' }}>
              <h2 style={{ textAlign:'left' ,fontSize: '50px' }}>Location</h2>
            </ParallaxLayer>
              
            <ParallaxLayer>
              
            </ParallaxLayer>

          </Parallax>
        </div>
      );
  };
  
  export default Home;
