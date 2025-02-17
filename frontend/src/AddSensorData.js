import React, { useState } from 'react';
import axios from 'axios';

const AddSensorData = () => {
    const [formData, setFormData] = useState({
        bicicleta_id: '',
        velocidad: '',
        distancia: '',
        nivel_bateria: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/api/sensores', formData);
            alert('Dato de sensor agregado correctamente');
            console.log(response.data);
        } catch (error) {
            console.error('Error al agregar el dato del sensor:', error);
            alert('Error al agregar el dato del sensor');
        }
    };

    return (
        <div>
            <h1>Agregar Dato de Sensor</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>ID de la Bicicleta:</label>
                    <input
                        type="number"
                        name="bicicleta_id"
                        value={formData.bicicleta_id}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Velocidad:</label>
                    <input
                        type="number"
                        name="velocidad"
                        value={formData.velocidad}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Distancia:</label>
                    <input
                        type="number"
                        name="distancia"
                        value={formData.distancia}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label>Nivel de Batería:</label>
                    <input
                        type="number"
                        name="nivel_bateria"
                        value={formData.nivel_bateria}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
};

export default AddSensorData;