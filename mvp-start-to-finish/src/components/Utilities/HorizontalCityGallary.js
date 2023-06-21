'use client'
import Image from 'next/image';
import './parallax.css';
import { ParallaxProvider, useController, ParallaxBanner, useParallaxController, } from 'react-scroll-parallax';
import { useEffect, useState, useRef } from 'react';
import Services from './services';
import AboutUs from './aboutUs';
import AboutUsTeam from './aboutUsTeam';


function preloadImage(url) {
  const img = new window.Image();
  img.src = url;
}

const HorizontalCityGallary = () => {
  const num_pages = 4;
  const imageUrls = [
    '/homepage/cityDay4-2.png',
    '/homepage/cityDay5.png',
    '/homepage/cityDay3-2.png',
    '/homepage/cityDay2-2.png',
    '/homepage/cityDay1-2.png',
    '/homepage/cityNight3-3.png',
    '/homepage/cityNightCloud.png',
    '/homepage/cityNightMoon.png',
    '/homepage/cityNight2-2-2.png',
    '/homepage/cityNight1-2.png'
  ];
  
  imageUrls.forEach(preloadImage);

  const animationOne = [
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh',}}>
            <Image src={imageUrls[0]} fill/>
        </div>
      ),
      translateY: [19.35, 91.8],
      translateX: [-1, 0],
      opacity: [2.5, -1.3],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh', }}>
            <Image src={imageUrls[1]} fill/>
        </div>
      ),
      translateX: [60, -100],
      translateY: [19.35, 91.8],
      opacity: [2.4, -2.25],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh', }}>
            <Image src={imageUrls[2]} fill/>
        </div>
      ),
      translateY: [14.7, 130],
      opacity: [1.75, -0.25],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh',}}>
            <Image src={imageUrls[3]} fill/>
        </div>
      ),
      translateY: [14.7, 130],
      opacity: [1.75, -0.25],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '104vh'}}>
              <div>
                  <h2 style  = {{
                    fontSize: 200, 
                    fontWeight: 'bold', 
                    zIndex: 1, 
                    position: 'absolute', 
                    top: '1%', 
                    right: 100, 
                    color: 'white', 
                    textShadow: '3px 3px 6px rgba(0, 0, 0, 0.5)'
                    }}>Dag en...</h2>
              </div>
            <Image src={imageUrls[4]} fill/>
        </div>
      ),
      
      translateY: [18.4, 101.8],
      
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '100vh'}}>

          <Image src={imageUrls[5]} fill/>
        </div>
      ),
      translateY: [80, 65],
      scaleY: [1, 1.75],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '100vh'}}>

          <Image src={imageUrls[6]} fill/>
        </div>
      ),
      translateY: [70, 20],
      translateX: [120, -130],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '100vh'}}>

          <Image src={imageUrls[7]} fill/>
        </div>
      ),
      translateX: [120, 30],
      translateY: [70, 16]
    },
    {
      children: (
        <div style={{ position: 'absolute', width: '100vw', height: '100vh'}}>
          <Image src={imageUrls[8]} fill/>
          <div>
              <h2 style  = {{
                fontSize: 200, 
                fontWeight: 'bold', 
                zIndex: 10, 
                position: 'absolute', 
                top: '2%', 
                left: 30, 
                color: 'white', 
                textShadow: '4px 4px 8px rgba(0, 0, 0, 1)'}}>Nacht staan wij voor jou klaar</h2>
            </div>
        </div>
      ),
      translateY: [90, -5.5],
    },
    {
      children: (
        <div style={{ position: 'absolute', width: '100vw', height: '104vh'}}>

          <Image src={imageUrls[9]} fill/>
        </div>
      ),
      translateY: [39.5, 61],
    },
  ]

  const animationTwo = [
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '100vh'}}>

          <Image src={imageUrls[5]} fill/>
        </div>
      ),
      translateY: [76.5, 71],
      scaleY: [1, 1.75],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '100vh'}}>

          <Image src={imageUrls[6]} fill/>
        </div>
      ),
      translateY: [70, 20],
      translateX: [120, -130],
    },
    {
      children: (
        <div style={{ position: 'absolute',  width: '100vw', height: '100vh'}}>

          <Image src={imageUrls[7]} fill/>
        </div>
      ),
      translateX: [120, 30],
      translateY: [70, 16]
    },
    {
      children: (
        <div style={{ position: 'absolute', width: '100vw', height: '100vh'}}>
          <Image src={imageUrls[8]} fill/>
        </div>
      ),
      translateY: [32, 75],
      translateX: [-38.5, 20],
    },
    {
      children: (
        <div>
          <h2 style  = {{
            fontSize: 200, 
            fontWeight: 'bold', 
            zIndex: 10, 
            position: 'absolute', 
            top: '1%', 
            left: 30, 
            color: 'white', 
            textShadow: '4px 4px 8px rgba(0, 0, 0, 1)'}}>Nacht staan wij voor jou klaar</h2>
        </div>
      ),
      translateY: [42, 60],
    },
    {
      children: (
        <div style={{ position: 'absolute', width: '100vw', height: '104vh'}}>

          <Image src={imageUrls[9]} fill/>
        </div>
      ),
      translateY: [46.5, 53],
      translateX: [190.75, -100],
    },
  ]

  const [layer, setLayer] = useState(animationOne);
  const [scrollThresholdReached, setScrollThresholdReached] = useState(false);
  const gallaryRef = useRef(null); // Create a ref
  const [gallaryHeight, setGallaryHeight] = useState(0);

  // Update the gallaryHeight state whenever the component is resized
  useEffect(() => {
    if (gallaryRef.current) {
      setGallaryHeight(gallaryRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (gallaryRef.current) {
        setGallaryHeight(gallaryRef.current.offsetHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const percentageThreshold = 97;
      const threshold = gallaryHeight * (percentageThreshold / 100);
      let currentScrollPos = window.pageYOffset;

      if (currentScrollPos > threshold && !scrollThresholdReached) {
        setScrollThresholdReached(true);
      } else if (currentScrollPos <= threshold && scrollThresholdReached) {
        setScrollThresholdReached(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrollThresholdReached, gallaryHeight]);

  return (
    <main style={{ backgroundColor: 'rgba(10,10,30,1)' }} ref={gallaryRef}>
      <ParallaxProvider>
        {scrollThresholdReached ? (
          <ParallaxBanner layers={animationTwo} style={{ height: '200vh' }} />
        ) : (
          <ParallaxBanner layers={animationOne} style={{ height: '200vh' }} />
        )}
      </ParallaxProvider>
      <Services />
      <AboutUs />
      <AboutUsTeam />
    </main>
  );
}
export default HorizontalCityGallary;