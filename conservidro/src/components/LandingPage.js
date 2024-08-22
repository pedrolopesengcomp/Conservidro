import Home from './sections/Home';
import Services from './sections/Services';
import Contact from './sections/Contact';
import About from './sections/About';

import { useLocation } from 'react-router-dom';


function LandingPage({YoffsetHome
    ,YoffsetAbout
    ,YoffsetServices
    ,YoffsetContact}){
    const location = useLocation();

    var page;

    return(
        <div className="relative top-24" onLoad={()=>{
            const home = document.getElementById('home');
            const services = document.getElementById('services');
            const about = document.getElementById('about');
            const contact = document.getElementById('contact');

            YoffsetHome(home.offsetTop);
            YoffsetAbout(about.offsetTop);
            YoffsetServices(services.offsetTop);
            YoffsetContact(contact.offsetTop);
        }}>
            <Home >
            </Home>
            <Services id="services"></Services>
            <About id="about"></About>
            <Contact id="contact"></Contact>
        </div>
    )
}

export default LandingPage;