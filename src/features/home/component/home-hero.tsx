import * as React from 'react';
import { Icon, type IconName } from '@components/ui/icon';
import { homeSections, paths } from '@config/paths';
import { github, profile } from '@config/profile';
import './home-hero.css';

type HeroLink = { label: string; href: string; icon: IconName; external?: boolean };

const links: HeroLink[] = [
    { label: 'See experiments', href: paths.home.getAnchor(homeSections.experiments), icon: 'flask' },
    ...(github ? [{ label: 'GitHub', href: github.url, icon: 'github' as const, external: true }] : []),
    { label: 'Say hello', href: paths.home.getAnchor(homeSections.contact), icon: 'message-circle' },
];

export const HomeHero = () => (
    <header className="home-hero">
        <div className="hero-top">
            <a href={paths.home.getAnchor('top')} className="hero-brand" aria-label={profile.name}>
                <img className="hero-brand-icon" src={`${process.env.PUBLIC_URL}/logo192.png`} alt="" />                <span className="hero-brand-name" aria-hidden="true">{profile.name}</span>
            </a>
            <p className="hero-status">
                <span className="hero-ping" aria-hidden="true" />
                {profile.status} in {profile.location}
            </p>
        </div>

        <div className="hero-body">
            <h1 className="hero-title text-gradient">Exploring the weird corners of code.</h1>

            <p className="hero-intro">
                Hey, I&apos;m <strong>{profile.name}</strong>. This is where I dump my coding
                experiments, half-baked ideas, and things I learned while breaking stuff.
                Nothing serious, just curiosity driven development.
            </p>

            <nav aria-label="Quick links" className="hero-links">
                {links.map(({ label, href, icon, external }) => (
                    <a
                        key={label}
                        href={href}
                        className="hero-link"
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                        <Icon name={icon} />
                        {label}
                    </a>
                ))}
            </nav>
        </div>
    </header>
);
