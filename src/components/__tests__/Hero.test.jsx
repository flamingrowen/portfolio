import { render, screen } from '@testing-library/react';
import Hero from '../Hero';
import { describe, it, expect } from 'vitest';

describe('Hero Component', () => {
    it('renders the user name', () => {
        render(<Hero />);
        const nameElement = screen.getByText(/Rohith Anil Kumar/i);
        expect(nameElement).toBeInTheDocument();
    });

    it('renders the job title', () => {
        render(<Hero />);
        const titleElement = screen.getByText(/Software Development Engineer I/i);
        expect(titleElement).toBeInTheDocument();
    });
});
