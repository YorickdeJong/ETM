import Image from "next/image";



function AboutUs() {
    return (
        <div style = {{height: '100vh', width: '100%', background: 'linear-gradient(to bottom,  rgba(20,40,60,1), rgba(2,22,38,1))', position: 'relative'}}>
            <div class="custom-shape-divider-top-1687339686">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div style = {{position: 'absolute', top: '10%', left: '38.5%'}}>
                <h1 style = {{
                    fontSize: 100, 
                    color: 'white', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 1)' }}>Het Team</h1>
                    <p style = {{
                    fontSize: 33, 
                    color: 'white', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 1)' }}>U bedenkt het, wij bouwen het</p>
            </div>

            <div  style={{width: '19%', height: '58.5%', 
            position: 'absolute', top: '39%', 
            left: '3.5%', borderRadius: 30, 
            overflow: 'hidden',
            boxShadow: '3px 3px 8px rgba(0, 0, 0, 1)'}}>
                <Image
                    src="/pf-foto/yorick_pf.png"
                    fill
                    
                />
            </div>
            
            <div  style={{width: '19%', height: '58.5%', 
            position: 'absolute', top: '39.5%', left: '27.5%', 
            borderRadius: 30, overflow: 'hidden',
            boxShadow: '3px 3px 8px rgba(0, 0, 0, 1)'}}>
                <Image
                    src="/pf-foto/olivier_pf.png"
                    fill
                />
            </div>

            <div  style={{width: '19%', height: '58.5%', 
            position: 'absolute', top: '39.5%', left: '51.5%', 
            borderRadius: 30, overflow: 'hidden',
            boxShadow: '3px 3px 8px rgba(0, 0, 0, 1)'}}>
                <Image
                    src="/pf-foto/nick_pf.png"
                    fill
                />
            </div>

            <div  style={{width: '19%', height: '58.5%', 
            position: 'absolute', top: '39.5%', left: '75.5%', 
            borderRadius: 30, overflow: 'hidden',
            boxShadow: '3px 3px 8px rgba(0, 0, 0, 1)'}}>
                <Image
                    src="/pf-foto/arthike_pf.png"
                    fill
                />
            </div>

            {/* <Image
                src="/pf-foto/olivier_pf.png"
                width = {410}
                height = {300}
                style={{position: 'absolute',  borderRadius: 30,  boxShadow: '3px 3px 8px rgba(0, 0, 0, 1)'}}
            /> */}

            {/* <Image
                src="/pf-foto/nick_pf.png"
                width = {400}
                height = {300}
                style={{position: 'absolute', top: '39.5%', left: '51.5%', borderRadius: 30,  boxShadow: '3px 3px 8px rgba(0, 0, 0, 1)'}}
            />

            <Image
                src="/pf-foto/arthike_pf.png"
                width = {410}
                height = {300}
                style={{position: 'absolute', top: '39.5%', left: '75.5%', borderRadius: 30,  boxShadow: '3px 3px 8px rgba(0, 0, 0, 1)'}}
            /> */}

            <div style = {{position: 'absolute', top: '87.7%', left: '9.5%'}}>
                <h1 style = {{
                    fontSize: 40, 
                    color: 'rgba(80, 133, 143)', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Yorick</h1>
            </div> 

            <div style = {{position: 'absolute', top: '87.9%', left: '33.9%'}}>
                <h1 style = {{
                    fontSize: 40, 
                    color: 'rgba(80, 133, 143)', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Arthike</h1>
            </div> 

            <div style = {{position: 'absolute', top: '88%', left: '58.5%'}}>
                <h1 style = {{
                    fontSize: 40, 
                    color: 'rgba(80, 133, 143)', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Olivier</h1>
            </div> 

            <div style = {{position: 'absolute', top: '88%', left: '83.2%'}}>
                <h1 style = {{
                    fontSize: 40, 
                    color: 'rgba(80, 133, 143)', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}>Nick</h1>
            </div> 
        </div>
    )
}

export default AboutUs;