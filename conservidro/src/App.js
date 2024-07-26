import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import Home from "./components/pages/Home";
import Contact from "./components/pages/Contact";
import Competition from "./components/pages/Competition";
import About from "./components/pages/About";
import NavBar from './components/NavBar';

function App() {
  return (
      <Router>
        <NavBar></NavBar>
        <Routes>
          <Route path="/conservidro" exact element={<Home />}/>
          <Route path="/conservidro/sobre-nos" element={<About />}/>
          <Route path="/conservidro/servicos" element={<Competition />}/>
          <Route path="/conservidro/contato" element={<Contact />}/>
        </Routes>
      </Router>
  );
}

export default App;
