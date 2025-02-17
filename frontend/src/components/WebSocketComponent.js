import React, { useEffect } from 'react';
import io from 'socket.io-client';

const WebSocketComponent = () => {
    useEffect(() => {
        const socket = io('http://localhost:3001');

        socket.on('connect', () => {
            console.log('Conectado al servidor WebSocket');
        });

        socket.on('disconnect', () => {
            console.log('Desconectado del servidor WebSocket');
        });

        // Ejemplo de enviar un mensaje al servidor
        socket.emit('mensaje', { data: 'Hola, servidor!' });

        // Ejemplo de recibir un mensaje del servidor
        socket.on('mensaje', (data) => {
            console.log('Mensaje recibido del servidor:', data);
        });

        return () => {
            socket.disconnect();
        };
    }, []);

    return (
        <div>
            <h1>WebSocket Component</h1>
        </div>
    );
};

export default WebSocketComponent;