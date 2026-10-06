import * as React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ContactSection } from './contact-section';
import { matrixUrl, profile } from '@config/profile';

describe('matrixUrl', () => {
    it('builds an encoded matrix.to link', () => {
        expect(matrixUrl('@someone:matrix.org')).toBe('https://matrix.to/#/%40someone%3Amatrix.org');
    });
});

describe('ContactSection', () => {
    it('links the Matrix ID instead of an email address', () => {
        render(<ContactSection />);

        const handle = screen.getByRole('link', { name: profile.matrix });
        expect(handle).toHaveAttribute('href', matrixUrl(profile.matrix));
        expect(document.querySelector('a[href^="mailto:"]')).toBeNull();
    });

    it('copies the Matrix ID to the clipboard', async () => {
        const user = userEvent.setup();
        render(<ContactSection />);

        await user.click(screen.getByRole('button', { name: 'Copy' }));

        await expect(navigator.clipboard.readText()).resolves.toBe(profile.matrix);
        expect(screen.getByRole('status')).toHaveTextContent('Copied to clipboard.');
    });

    it('reports when copying fails', async () => {
        const user = userEvent.setup();
        jest.spyOn(navigator.clipboard, 'writeText').mockRejectedValueOnce(new Error('denied'));
        render(<ContactSection />);

        await user.click(screen.getByRole('button', { name: 'Copy' }));

        expect(await screen.findByText('Could not copy, select the ID instead.')).toBeInTheDocument();
    });
});
