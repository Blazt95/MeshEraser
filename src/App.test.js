// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MeshEraser title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MeshEraser/i);
    expect(titleElement).toBeInTheDocument();
});
