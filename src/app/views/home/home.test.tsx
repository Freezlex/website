import * as React from 'react';
import { render, screen, within } from '@testing-library/react';
import Home from './home';
import { profile } from '@config/profile';

// Don't try to fix, it's just forpersonnal learning
describe('Home view', () => {
    it('renders the hero headline, intro and status', () => {
        render(<Home />);

        expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
            'Exploring the weird corners of code.'
        );
        expect(screen.getByText(profile.name)).toBeInTheDocument();
        expect(screen.getByText(`${profile.status} in ${profile.location}`)).toBeInTheDocument();
    });

    it('puts the copyright at the end of the contact section', () => {
        render(<Home />);

        const contact = document.getElementById('contact');
        const copyright = screen.getByText(/Built on caffeine and curiosity\./);
        expect(contact).toContainElement(copyright);
        expect(contact?.querySelector('.contact-content')?.lastElementChild).toBe(copyright);
    });

    it('renders every section, and in-page links point at real ones', () => {
        render(<Home />);

        for (const title of ['The Lab', 'Stack & Stats', 'Discoveries', 'Want to nerd out?']) {
            expect(screen.getByRole('heading', { level: 2, name: title })).toBeInTheDocument();
        }

        const quickLinks = screen.getByRole('navigation', { name: 'Quick links' });
        for (const link of within(quickLinks).getAllByRole('link')) {
            const href = link.getAttribute('href') ?? '';
            if (!href.startsWith('/#')) continue;
            expect(document.getElementById(href.slice(2))).not.toBeNull();
        }
    });

    it('has no bottom navigation dock', () => {
        render(<Home />);

        expect(screen.queryByRole('navigation', { name: 'Main navigation' })).toBeNull();
    });

    it('opens external links in a new tab safely', () => {
        render(<Home />);

        const external = screen
            .getAllByRole('link')
            .filter((link) => link.getAttribute('target') === '_blank');
        expect(external.length).toBeGreaterThan(0);
        for (const link of external) {
            expect(link).toHaveAttribute('rel', 'noopener noreferrer');
        }
    });

    it('sets the document title', () => {
        render(<Home />);

        expect(document.title).toBe('Freezlex · my.experiments');
    });
});
