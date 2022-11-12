import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Contato from './pages/Contato.jsx';
import Empresa from './pages/Empresa';
import Home from './pages/Home';
import NavBar from './pages/NavBar.jsx';
import Footer from './pages/Footer.jsx';

function App(){

    return (
       <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/empresa" element={<Empresa />}/>
                <Route path="/contato" element={<Contato />}/>
            </Routes>
            <Footer />
       </Router> 
    );
}

export default App;