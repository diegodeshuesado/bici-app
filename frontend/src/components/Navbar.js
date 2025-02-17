import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: '#E11931', color: '#FFFFFF', padding: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" style={{ color: '#FFFFFF', textDecoration: 'none', fontSize: '1.5rem' }}>
                    Bicicletas IPN
                </Link>
                <div>
                    <Link to="/sensores" style={{ color: '#FFFFFF', marginRight: '1rem', textDecoration: 'none' }}>
                        Sensores
                    </Link>
                    <Link to="/graficas" style={{ color: '#FFFFFF', marginRight: '1rem', textDecoration: 'none' }}>
                        Gráficas
                    </Link>
                    <Link to="/login" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;