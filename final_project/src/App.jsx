import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Panel from './components/Panel';
import Footer from './components/Footer';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import './index.css';

function App() {
    return (
        <Router>
            <Navbar />
            <Panel />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
