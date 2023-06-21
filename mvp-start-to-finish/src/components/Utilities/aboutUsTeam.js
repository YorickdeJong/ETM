import { FaBoxes, FaLaptopCode, FaRunning, FaBuilding, FaChartLine, FaHandshake } from 'react-icons/fa';
import './aboutUs.css'
function AboutUsTeam() {
    return (
        <div style={{ height: '100vh', width: '100%', backgroundColor: 'rgba(10,35,50, 1)', position: 'relative' }}>
            <div class="custom-shape-divider-top-1687338736" >
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                </svg>
            </div>

            <div style={{ position: 'absolute', top: '20%', left: '3%', width: '22%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaBoxes color="rgba(0,236,249, 1)" size={80}/>
                <h1 style={{ color: 'rgba(0,236,249, 1)', fontSize: 40, marginTop: 10 }}>COMPLETE PAKKET</h1>
                <p style={{ color: 'rgba(200,200,200, 1)', wordWrap: 'break-word', marginTop: 15, fontSize: 22  }}>Wij begeleiden u van start tot finish, tot dat u tevreden bent</p>
            </div>
            <div style={{ position: 'absolute', top: '20%', left: '37%', width: '22%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaLaptopCode color="rgba(0,236,249, 1)" size={80} />
                <h1 style={{ color: 'rgba(0,236,249, 1)', fontSize: 40, marginTop: 10 }}>TECHNOLOGIE</h1>
                <p style={{ color: 'rgba(200,200,200, 1)', wordWrap: 'break-word', marginTop: 15, fontSize: 22 }}>uw team bestaat uitsluitend uit engineers, opgeleid op de TU Delft. Zij helpen jou met de beste technische oplossing voor jouw probleem</p>
            </div>
            <div style={{ position: 'absolute', top: '20%', left: '72%', width: '22%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaRunning color="rgba(0,236,249, 1)" size={80} />
                <h1 style={{ color: 'rgba(0,236,249, 1)', fontSize: 40, marginTop: 10 }}>EERSTE IN DE RIJ</h1>
                <p style={{ color: 'rgba(200,200,200, 1)', wordWrap: 'break-word', marginTop: 15, fontSize: 22  }}>Ook na one samenwerking staan wij altijd voor u klaar</p>
            </div>
            <div style={{ position: 'absolute', top: '60%', left: '3%', width: '22%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaBuilding color="rgba(0,236,249, 1)" size={80} />
                <h1 style={{ color: 'rgba(0,236,249, 1)', fontSize: 40, marginTop: 10 }}>BUSINESS</h1>
                <p style={{ color: 'rgba(200,200,200, 1)', wordWrap: 'break-word', marginTop: 15, fontSize: 22  }}>Alle teamgenoten hebben ervaring met bedrijven opzetten en kunnen u helpen met uw strategie</p>
            </div>
            <div style={{ position: 'absolute', top: '60%', left: '37%', width: '22%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaChartLine color="rgba(0,236,249, 1)" size={80} />
                <h1 style={{ color: 'rgba(0,236,249, 1)', fontSize: 40, marginTop: 10 }}>MARKETING</h1>
                <p style={{ color: 'rgba(200,200,200, 1)', wordWrap: 'break-word', marginTop: 15, fontSize: 22 }}>Het team heeft verstand van digitale marketing, om uw app/website in de spotlights te werpen op het web</p>
            </div>
            <div style={{ position: 'absolute', top: '60%', left: '72%', width: '22%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <FaHandshake color="rgba(0,236,249, 1)" size={80} />
                <h1 style={{ color: 'rgba(0,236,249, 1)', fontSize: 40, marginTop: 10 }}>PARTNER</h1>
                <p style={{ color: 'rgba(200,200,200, 1)', wordWrap: 'break-word', marginTop: 15, fontSize: 22  }}>Wij zien u als meer dan een klant, u ben onze partner</p>
            </div>
        </div>
    )
}

export default AboutUsTeam;