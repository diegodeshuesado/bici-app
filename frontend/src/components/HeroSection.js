import React from 'react';

const HeroSection = () => {
    return (
        <div style={{ backgroundColor: '#003366', color: '#FFFFFF', padding: '4rem', textAlign: 'center' }}>
            <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Monitoreo de Bicicletas Inteligentes</h1>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
                Visualiza y gestiona los datos de sensores en tiempo real.
            </p>
            <button style={{ backgroundColor: '#E11931', color: '#FFFFFF', padding: '0.8rem 2rem', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Ver Datos
            </button>
        </div>
    );
};

export default HeroSection;