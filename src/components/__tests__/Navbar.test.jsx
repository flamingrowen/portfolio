import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import { describe, it, expect, vi } from 'vitest';

// Mock react-scroll
vi.mock('react-scroll', () => ({
    Link: ({ children }) => <span>{children}</span>,
}));

describe('Navbar Component', () => {
    it('renders the logo', () => {
        render(<Navbar />);
        const logoElement = screen.getByText(/Portfolio./i);
        expect(logoElement).toBeInTheDocument();
    });

    it('renders navigation links', () => {
        render(<Navbar />);
        const aboutLinks = screen.getAllByText(/about/i);
        const projectsLinks = screen.getAllByText(/projects/i);
        expect(aboutLinks.length).toBeGreaterThan(0);
        expect(projectsLinks.length).toBeGreaterThan(0);
    });
});
