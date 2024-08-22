import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import {useState} from 'react';

import LandingPage from './components/LandingPage';


import NavBar from './components/NavBar';
import Footer from "./components/containers/Footer";

import Logo from "./images/Logo.png";

function App() {
  const [scroll, setScroll] = useState(0);

  const [YoffsetHome, setYoffsetHome] = useState(0);
  const [YoffsetAbout, setYoffsetAbout] = useState(0);
  const [YoffsetServices, setYoffsetServices] = useState(0);
  const [YoffsetContact, setYoffsetContact] = useState(0);


  return (
      <Router>
        <NavBar scrollTo={scroll}
        YoffsetHome={YoffsetHome} 
        YoffsetAbout={YoffsetAbout}
        YoffsetServices={YoffsetServices}
        YoffsetContact={YoffsetContact}>

        </NavBar>
        <Routes>
          <Route path="/conservidro" exact element={<LandingPage 
          YoffsetHome={setYoffsetHome} 
          YoffsetAbout={setYoffsetAbout}
          YoffsetServices={setYoffsetServices}
          YoffsetContact={setYoffsetContact}
          section="home"/>}/>
          <Route path="/conservidro/sobre-nos" element={<LandingPage  section="about"
          YoffsetHome={setYoffsetHome} 
          YoffsetAbout={setYoffsetAbout}
          YoffsetServices={setYoffsetServices}
          YoffsetContact={setYoffsetContact}
          />}/>
          <Route path="/conservidro/servicos" element={<LandingPage  section="services"
          YoffsetHome={setYoffsetHome} 
          YoffsetAbout={setYoffsetAbout}
          YoffsetServices={setYoffsetServices}
          YoffsetContact={setYoffsetContact}/>}/>
          <Route path="/conservidro/contato" element={<LandingPage section="contact"
          YoffsetHome={setYoffsetHome} 
          YoffsetAbout={setYoffsetAbout}
          YoffsetServices={setYoffsetServices}
          YoffsetContact={setYoffsetContact}/>}/>
        </Routes>
        <Footer SrcLogo={Logo}></Footer>
      </Router>
  );
}

export default App;
