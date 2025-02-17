import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from '../../frontend/src/components/MyComponent';

test('renders Hola, Mundo button', () => {
    render(<MyComponent />);
    const buttonElement = screen.getByText(/Hola, Mundo/i);
    expect(buttonElement).toBeInTheDocument();
});