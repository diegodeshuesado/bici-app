import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js';

const SensorChart = () => {
    const chartRef = useRef(null);

    useEffect(() => {
        const ctx = chartRef.current.getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
                datasets: [
                    {
                        label: 'Datos del Sensor',
                        data: [12, 19, 3, 5, 2, 3],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }, []);

    return <canvas ref={chartRef} width="400" height="200"></canvas>;
};

export default SensorChart;