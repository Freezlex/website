import * as React from 'react';
import { Icon } from '@components/ui/icon';
import { Waves } from '@components/ui/waves';
import { homeSections } from '@config/paths';
import { matrixUrl, profile } from '@config/profile';
import './contact-section.css';

const MatrixCopy = () => {
    const [status, setStatus] = React.useState('');

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(profile.matrix);
            setStatus('Copied to clipboard.');
        } catch {
            setStatus('Could not copy, select the ID instead.');
        }
    };

    return (
        <>
            <div className="contact-pill">
                <span className="contact-pill-id">{profile.matrix}</span>
                <button type="button" className="contact-submit" onClick={handleCopy}>
                    Copy
                    <Icon name="copy" size={14} />
                </button>
            </div>
            <p className="contact-status" role="status">
                {status}
            </p>
        </>
    );
};

export const ContactSection = () => (
    <section id={homeSections.contact} className="contact-stage">
        <Waves />

        <div className="contact-content">
            <p className="type-label contact-eyebrow">
                <span aria-hidden="true">./</span>connect
            </p>

            <h2 className="contact-title">
                <span>Want to nerd out?</span>
            </h2>

            <div className="contact-row">
                <div className="contact-intro">
                    <p className="contact-lead">
                        If you want to talk about sovereignty, share cool stuff you found, or just
                        have talk about anything, ping me on Matrix.
                    </p>
                    <a
                        href={matrixUrl(profile.matrix)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-handle"
                    >
                        {profile.matrix}
                    </a>
                    {profile.socials.length > 0 && (
                        <ul className="contact-socials">
                            {profile.socials.map((social) => (
                                <li key={social.id}>
                                    <a href={social.url} target="_blank" rel="noopener noreferrer">
                                        {social.label.toLowerCase()} ↗
                                    </a>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>

                <div className="contact-form-wrap">
                    <p className="type-label contact-form-label">My Matrix ID</p>
                    <MatrixCopy />
                </div>
            </div>

            <p className="contact-copyright">
                © {new Date().getFullYear()} {profile.name}. Built on caffeine and curiosity.
            </p>
        </div>
    </section>
);
