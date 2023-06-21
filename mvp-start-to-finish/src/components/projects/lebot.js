import Image from 'next/image';
import '../../app/globals.css';
import '../../pages/projects.css';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import { useState } from 'react';

function Lebot({ images, currentPage }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  return (
    <div className="mt-8 ml-4 mr-8" style={{height: '100vh'}}>
      <div style={styles.containerRight} className="blurred-container shadow">
        <div className='flex flex-row mt-12 ml-10'>
          {images.map((img, index) => (
            <div key={index} className='mb-4 rounded-xl overflow-hidden mr-4' style = {{                
                borderColor: 'rgba(77,77,77,0.2)',
                borderWidth: 1,}}>
              <img
                src={img}
                alt={"Image " + index}
                className="dark"
                width={170}
                height={600}
                onClick={() => handleImageClick(img)}
                style={{ opacity: 1, cursor: 'pointer' }} // cursor: pointer indicates the image is clickable
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100vh',
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 1000,
              transition: 'all 0.3s ease'
            }}
            onClick={handleClose}
          >
            <img
              src={selectedImage}
              style={{
                maxHeight: '80%',
                maxWidth: '80%',
                transition: 'all 0.3s ease',
                borderRadius: 20,
                borderColor: 'rgba(77,77,77,0.2)',
                borderWidth: 2,
              }}
            />
          </div>
        )}

        <h2 style={styles.header}>Project</h2>
        <p style= {styles.text}>Lebot is een interactief project gemaakt voor scholen. Leerlingen bouwen, programeren
        en onderzoeken hoe ze een op afstand bestuurbare robot kunnen maken. Met een interactieve app
        kunnen leerlingen de robot besturen om data te verzamelen en te analyseren via live grafieken.
        </p>
      </div>
    </div>
  );
}
export default Lebot;

const styles = {
  containerRight: {
    // position: 'absolute',
    bottom: '3%',
    left: '4.5%',
    height: '78%',
    width: '31%',
    backgroundColor: 'rgba(22, 22, 28, 0.75)',
    borderRadius: 20,
    // borderColor: 'rgba(77,77,77,0.2)',
    // borderWidth: 1,
  },
  header: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 70,
    marginTop: 15
  },
  text: {
    padding: 10,
    overflowWrap: 'break-word',
    lineHeight: 2.3,
    fontSize: 20,
    marginRight: 60,
    marginLeft: 60,
    marginTop: 8,
    fontWeight: '400',
    color: 'rgba(200, 210, 220, 1)'
  },
  images: {
    // position: 'absolute',
    // top: '6%',
    // right: '4.5%',
    alignSelf: 'center',
  }
};

// <div className="h-full w-1/5 flex flex-col">

// <div className="h-1/2 w-full border border-gray-900 rounded-xl shadow" style = {{backgroundColor: 'rgba(9, 12, 28, 1)'}}>
//     {/* Insert content for top left container here */}
//     <h2 className='header-text'>Omschrijving Poject</h2>
// </div>

// <div className="h-1/3 w-full border border-gray-900 mt-8 rounded-xl shadow" style = {{backgroundColor: 'rgba(9, 12, 24, 1)'}}>
//     {/* Insert content for bottom left container here */}
//     <h2 className='header-text'>Challenges</h2>
// </div>

// </div>

// <div className="h-full w-3/4 flex flex-col ml-8">

// <div className="h-1/4 w-full flex flex-row rounded-xl">
//     <div className="h-full w-1/2 border border-gray-900 rounded-xl shadow" style = {{backgroundColor: 'rgba(9, 12, 24, 1)'}}>
//     <h2 className='header-text'>Technologie</h2>
//     {/* Insert content for top right container 1 here */}
//     </div>
//     <div className="h-full w-1/2 border border-gray-900 rounded-xl shadow ml-8 mr-4" style = {{backgroundColor: 'rgba(9, 10, 22, 1)'}}>
//     {/* Insert content for top right container 2 here */}
//     <h2 className='header-text'>Learning Bot</h2>
//     </div>
// </div>

// <div className="w-1/2 mt-8 overflow-x-auto flex flex-nowrap">
// {
//         currentPage === 1 && 
        // images.map((img, index) => (
        // <div key={index} className='mb-4 rounded-xl border overflow-hidden border-gray-800 mr-4'>
        //         <Image
        //         src={img}
        //         alt={"Image " + index}
        //         className="dark"
        //         width={302}
        //         height={600}
        //         priority  
        //         />
        // </div>
        // ))
//     }

// </div>
// </div>