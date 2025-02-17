import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Bicicletas = () => {
    const [bicicletas, setBicicletas] = useState([]);

    useEffect(() => {
        // Obtener las bicicletas desde el backend
        axios.get('http://localhost:3001/bicicletas')
            .then((response) => setBicicletas(response.data))
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Bicicletas</h1>
            <ul>
                {bicicletas.map((bicicleta) => (
                    <li key={bicicleta.id}>
                        {bicicleta.nombre} - {bicicleta.estado}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Bicicletas;