import React from 'react';

const FeatureSection = () => {
    const features = [
        { title: 'Monitoreo en Tiempo Real', description: 'Accede a datos actualizados de sensores.' },
        { title: 'Gráficas Interactivas', description: 'Visualiza los datos de manera intuitiva.' },
        { title: 'Panel de Administración', description: 'Gestiona bicicletas y usuarios.' },
    ];

    return (
        <div style={{ backgroundColor: '#FFFFFF', padding: '4rem', textAlign: 'center' }}>
            <h2 style={{ color: '#003366', marginBottom: '2rem' }}>Características</h2>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                {features.map((feature, index) => (
                    <div key={index} style={{ width: '30%', padding: '1rem', border: '1px solid #666666', borderRadius: '5px' }}>
                        <h3 style={{ color: '#E11931' }}>{feature.title}</h3>
                        <p style={{ color: '#666666' }}>{feature.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureSection;