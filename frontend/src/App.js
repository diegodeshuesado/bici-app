import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SensorData from './SensorData';
import AddSensorData from './AddSensorData'; // Nuevo componente para agregar datos
import Home from './Home'; // Nuevo componente para la página de inicio
import WebSocketComponent from './components/WebSocketComponent'; // Componente para WebSocket
import Navbar from './components/Navbar'; // Componente Navbar
import HeroSection from './components/HeroSection'; // Componente HeroSection
import FeatureSection from './components/FeatureSection'; // Componente FeatureSection
import Footer from './components/Footer'; // Componente Footer

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <>
                            <HeroSection />
                            <FeatureSection />
                        </>
                    } />
                    <Route path="/sensores" element={<SensorData />} />
                    <Route path="/agregar-sensor" element={<AddSensorData />} />
                    <Route path="/websocket" element={<WebSocketComponent />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;