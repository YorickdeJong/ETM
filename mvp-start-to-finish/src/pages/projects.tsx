import { useState } from 'react';
import '../app/globals.css'
import NavBar from '@/components/Utilities/NavBar';
import Image from 'next/image';
import './projects.css';

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const images = ["/lebot/home.png", "/lebot/robotstore.png", "/lebot/login2.png", "/lebot/planets.png", "/lebot/measurements.png"];

  const pages = [
    { title: 'Learning Bot' },
    { title: 'Ajax' },
    { title: 'School Klaar' },
  ];

  const nextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, pages.length));
  }

  const prevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  }

  return (
    <div>
      <NavBar />

      <main className="flex min-h-screen flex-col items-center justify-between p-12">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm flex flex-col">
          <div className= 'mt-4'>
            <h1 className='text-3xl'>{pages[currentPage - 1].title}</h1>
          </div>
          <div className='mt-10 flex overflow-x:auto scrollbar-hide' style={{width: '1300px', height: '542px'}}>
            {
                currentPage == 1 &&
                    images.map((img, index) => (
                        <div key={index} className='mb-4 rounded-xl border overflow-hidden border-gray-800 mr-4'>
                            <Image
                                src={img}
                                alt={"Image " + index}
                                className="dark"
                                width={300}
                                height={600}
                                priority  
                            />
                        </div>
                    ))
            }
          </div>
          <div className='mt-10 mr-4'>
            <button onClick={prevPage} className='mr-5 text-2xl'>Prev</button>
            <button onClick={nextPage} className='mr-5 text-2xl'>Next</button>
          </div>
        </div>
      </main>
    </div>
  )
}