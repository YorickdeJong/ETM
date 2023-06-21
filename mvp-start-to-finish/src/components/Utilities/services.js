



import Image from 'next/image';
import ServiceContainer from './serviceContainer';
import './services.css'

function Services() {
    return (
        <div style = {{height: '130vh', width: '100%', position: 'relative', background: 'linear-gradient(to bottom, rgba(3,31,45,1), rgba(2,23,39,1))'}}>
            <div class="custom-shape-divider-top-1687345889" style={{ zIndex: 1 }}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <defs>
                        <filter id="f1" x="-50%" y="-50%" width="200%" height="200%">
                            <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
                            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="3" />
                            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
                        </filter>
                    </defs>
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" filter="url(#f1)"></path>
                </svg>
            </div>

            <div style={{height: '100vh', width: '100%', position: 'relative', overflow: 'hidden', top: '15%'}}>
                <Image 
                    src="/services/services-2-4.png"
                    fill
                />
            </div>
            <div style = {{position: 'absolute', top: '4%', left: '29.5%', zIndex: 2,}}>
                <h1 style = {{
                    fontSize: 65, 
                    color: 'rgba(192, 242, 245,1)', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 1)' }}>Hoe kunnen wij jou helpen?</h1>
            </div>

            <div style = {{position: 'absolute', top: '21%', left: '11%', zIndex: 2,}}>
                <h1 style = {{
                    fontSize: 65, 
                    color: 'rgba(102,152,165,1)', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 1)' }}>Marketing</h1>
            </div>

            <div style = {{position: 'absolute', top: '21%', left: '41%', zIndex: 2,}}>
                <h1 style = {{
                    fontSize: 65, 
                    color: 'rgba(102,152,165,1)', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 1)' }}>Development</h1>
            </div>

            <div style = {{position: 'absolute', top: '21%', left: '76%', zIndex: 2,}}>
                <h1 style = {{
                    fontSize: 65, 
                    color: 'rgba(102,152,165,1)', 
                    fontWeight: 'bold', 
                    textAlign: 'center',
                    textShadow: '4px 4px 8px rgba(0, 0, 0, 1)' }}>Business</h1>
            </div>

            <ServiceContainer 
                top = {'71%'}
                left = {'4.3%'}
                width = {'29%'}
                title = 'Marketing'
                text= 'Wij stoppen niet bij het bouwen van jouw website of app. Wij helpen jou ook met het promoten van jouw product.'
            />

            <ServiceContainer 
                top = {'71%'}
                left = {'36%'}
                width = {'30%'}
                title = 'Web/App Development'
                text = 'Bouw jouw droom website of app met ons team van developers. Laat jouw ideeën tot leven komen.'
            />

            <ServiceContainer 
                top = {'71%'}
                left = {'68%'}
                width = {'30%'} 
                title = 'Business Development'
                text= 'Elk bedrijf is anders, daarom helpen wij jou met het ontwikkelen van een strategie die bij jouw bedrijf past.'
            />
        </div>
    );
}

export default Services;