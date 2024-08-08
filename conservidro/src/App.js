import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Services from "./components/pages/Services";
import About from "./components/pages/About";


import NavBar from './components/NavBar';
import Footer from "./components/containers/Footer";

import Logo from "./images/Logo.png";

function App() {
  return (
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/conservidro" exact element={<Home />}/>
          <Route path="/conservidro/sobre-nos" element={<About />}/>
          <Route path="/conservidro/servicos" element={<Services />}/>
          <Route path="/conservidro/contato" element={<Contact />}/>
        </Routes>
        <Footer SrcLogo={Logo}></Footer>
      </Router>
  );
}

export default App;
