import Image from 'next/image';
import '../app/globals.css'
import NavBar from '@/components/Utilities/NavBar';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // This will import the basic styles
import './contact-css.css';

export default function Projects() {
    const imageWidth = 450;
    return (
        <div className="mb-10">
            <NavBar />
            <div className='flex flex-row grid-rows-1 mt-8 ml-16 mr-20'>
                <div className='mr-20'>
                    <Image
                        src={"/pf-foto/IMG_0013.JPG"}
                        alt="web Logo"
                        className="object-contain rounded-t-lg"
                        width={imageWidth}
                        height={200}
                        priority  
                    />
                    <div className='text-gray-300 p-3' style = {{backgroundColor: 'rgba(70, 75, 85, 1)', width: imageWidth + 5, borderRadius: 5, borderTopLeftRadius: 0}}>
                        <h2 style = {{color: 'rgba(225, 230, 230,1)', fontWeight: '304', textAlign: 'center', fontSize: 22}}>Arthike Kandasamy - Yorick de Jong </h2>
                    </div>
                    
                    <div>
                        <h2 className='mt-6 ml-2 text-gray-500 text-2xl'>Contact Informatie</h2>
                    </div>
                    
                    <div className='mt-6 rounded' style = {{borderColor: '#131213', borderWidth: 3, width: imageWidth}}>
                        <h2 className = 'text-xl p-4 text-gray-400' style = {{borderBottomColor: '#131213', borderBottomWidth: 2}}>yorickdejong@gmail.com</h2>
                        <h2 className = 'text-xl p-4 text-gray-400' style = {{borderBottomColor: '#131213', borderBottomWidth: 2}}>+31611417293</h2>
                        <h2 className = 'text-xl p-4 text-gray-400'>Passerelstraat 10A, Rotterdam</h2>
                    </div>

                    <div>
                        <h2 className='mt-6 ml-2 text-gray-500 text-2xl'>Beschikbaar</h2>
                    </div>

                    <div className=' mt-6 rounded' style = {{width: imageWidth, backgroundColor: '#11151b'}}>
                        <h2 className = 'text-xl p-4 text-gray-400' style = {{borderBottomWidth: 2, borderBottomColor: '#1d2026'}}>ma - vrij: 9h - 18h</h2>
                        <h2 className = 'text-xl p-4 text-gray-400'>za - zo: 9h - 15h</h2>
                    </div>


                    <div className=' mt-6 rounded' style = {{width: imageWidth, backgroundColor: '#11151b'}}>
                        <h2 className = 'text-xl p-4 text-gray-400'>FAQ</h2>
                    </div>

                </div>

                <div className='border w-full rounded-xl border-gray-900 center-items mb-6 mr-6 ml-2'
                    style={{backgroundColor: 'rgba(14, 18, 22, 1)', color: '#fff'}}>
                    <h2 className="text-2xl text-gray-400 " style={{textAlign: 'center', fontSize: 40, marginTop: 50, marginBottom: 50}}>Contact Formulier</h2>
                    <form className="flex flex-col items-center">
                        <input className="mb-4 pl-4 w-3/4  p-3 rounded-xl text-gray-300 placeholder-gray-400 input-shadow" type="text" name="name" placeholder="Naam" style={{backgroundColor: 'rgba(23, 28, 34, 1)', borderColor: '#1a1f24', fontSize: 18}}/>
                        <input className="mb-4 pl-4  w-3/4  p-3 rounded-xl text-gray-300 placeholder-gray-400 input-shadow" type="email" name="email" placeholder="Email" style={{backgroundColor: 'rgba(23, 28, 34, 1)', borderColor: '#1a1f24', fontSize: 18}} />
                        <textarea className="mb-4 pl-4  w-3/4  p-4 h-52 rounded-xl text-gray-300 placeholder-gray-400 input-shadow" name="message" placeholder="Jouw Vraag" style={{backgroundColor: 'rgba(23, 28, 34, 1)', borderColor: '#1a1f24', fontSize: 18}} />
                        <button className="w-3/4 py-2 text-gray-200 rounded-xl button-shadow" type="submit" style={{backgroundColor: '#23272c', borderColor: '#23272c', fontSize: 20}}>Submit</button>
                    </form>

                    <div className='flex justify-center items-center mt-12 mb-10'>
                        <Calendar />
                    </div>
                </div>  

            </div>
        </div>
    )
}