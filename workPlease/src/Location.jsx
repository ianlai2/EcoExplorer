
const Location = () => {
    const ref = useRef();
    return (
        <div style={{ backgroundColor: '#FFF8C8' }}>
          <Parallax pages={2} ref={ref} style={{overflowX: 'hidden'}}>
    
            <ParallaxLayer
            offset={1}
            speed={1}
            style={{ backgroundImage: `url(${flower3})`, backgroundSize: '160px', marginLeft: '87%' }}/>
    
            <ParallaxLayer
            offset={1.2}
            speed={2.5}
            style={{ backgroundImage: `url(${flower5})`, backgroundSize: '200px', marginLeft: '10%' }}/>
    
            <ParallaxLayer sticky={{ start: 0.3, end: 0.95 }} style={{ display: 'flex ', justifyContent: 'center'}}>
              <img src={logo} alt="logo" style={{ display: 'block', maxWidth: "840.75px", maxHeight: '167.25px' }}/>
            </ParallaxLayer>
    
            <ParallaxLayer offset={0.45}>
              <h3>Explore, Play, and Grow with EcoExplorer - where soil sensors meet fun, unlocking the secrets of your local ecosystem!</h3>
            </ParallaxLayer>
    
            <ParallaxLayer sticky={{ start: 1.1, end: 1.1 }} style={{ marginLeft: '10%' }}>
              <h2 style={{ height: '200px' }}>About</h2>
            </ParallaxLayer>
            
            <ParallaxLayer sticky={{ start: 1.1, end: 1.1 }} style={{ marginLeft: '30%' }}>
              <div style={{ fontSize: '200%', display: 'block', width: '55%', height: 'auto', textAlign: 'justify'}}>
                Welcome to EcoExplorer, where the magic of nature comes to life! 🌿 
                Get ready for an amazing journey into your local world. Our special tool, the "Soil Moisture Sensor," 
                is like a superhero gadget that lets you talk to the ground and discover the secrets of your natural neighborhood. 
                Are you ready for an adventure? Let's explore together and learn the coolest things about the great outdoors! 🌍🔍✨
              </div>
            </ParallaxLayer>
          </Parallax>
        </div>
      );
  };
  
  export default Location;