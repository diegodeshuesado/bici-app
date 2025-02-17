import React from 'react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: '#003366', color: '#FFFFFF', padding: '2rem', textAlign: 'center' }}>
            <p>© 2023 Bicicletas IPN. Todos los derechos reservados.</p>
            <div>
                <a href="/politica-privacidad" style={{ color: '#FFFFFF', marginRight: '1rem', textDecoration: 'none' }}>
                    Política de Privacidad
                </a>
                <a href="/contacto" style={{ color: '#FFFFFF', textDecoration: 'none' }}>
                    Contacto
                </a>
            </div>
        </footer>
    );
};

export default Footer;