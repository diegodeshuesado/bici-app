import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';

const SensorChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        axios.get('http://localhost:3001/api/sensores')
            .then((response) => {
                const data = response.data;
                const labels = data.map((sensor) => `Bicicleta ${sensor.bicicleta_id}`);
                const speeds = data.map((sensor) => sensor.velocidad);

                const ctx = chartRef.current.getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: labels,
                        datasets: [{
                            label: 'Velocidad (km/h)',
                            data: speeds,
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        }],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                    },
                });
            })
            .catch((error) => console.error('Error:', error));
    }, []);

    return (
        <div>
            <h1>Gráfica de Velocidad de Bicicletas</h1>
            <canvas ref={chartRef}></canvas>
        </div>
    );
};

export default SensorChart;