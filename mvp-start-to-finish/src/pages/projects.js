import { useState, useRef } from 'react';
import '../app/globals.css'
import NavBar from '@/components/Utilities/NavBar';
import Image from 'next/image';
import './projects.css';
import { Canvas, } from '@react-three/fiber';
import dynamic from 'next/dynamic';
const ImageThreeD = dynamic(() => import('../components/3D/ImageThreeD'), { ssr: false });
import Lebot from '../components/projects/lebot';

export default function Projects() {
    const [currentPage, setCurrentPage] = useState(1);
    const imagesLebot = ["/lebot/home.png", "/lebot/robotstore.png", "/lebot/planets.png"] //, "/lebot/measurements.png"];
    const imagesSchoolKlaar = ["/school_klaar/image.png", "/school_klaar/image-2.png", "/school_klaar/image-3.png", "/school_klaar/image-4.png", "/school_klaar/image-5.png"] 
  
    const pages = [
      { title: 'Learning Bot' },
      { title: 'School Klaar' },
      { title: 'Teach and Learn' },
    ];
    
    return (
      <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: 'rgba(6, 6, 15)', overflow: 'hidden'}}>
        <header style={{ zIndex: 100, position: 'relative' }}>
          <NavBar />
        </header>
        <main style={{flex: 1}}>
          <ImageThreeD />
        </main>
      </div>
    );
  }
