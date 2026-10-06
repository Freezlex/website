import * as React from 'react';
import { Section, Separator } from '@components/ui/section';
import { TechChip, TechChipGroup } from '@components/ui/tech-chip';
import { homeSections } from '@config/paths';
import './sections.css';

const FOCUS: { label: string; lead: boolean }[] = [
    { label: 'React', lead: true },
    { label: 'Kotlin', lead: true },
    { label: 'Rust (Learning!)', lead: false },
];

export const AboutSection = () => (
    <Section id={homeSections.about} title="The Lab">
        <div className="prose-reading">
            <p>
                <strong>Creative Technologist.</strong> I don&apos;t fit in a specific box. I
                bounce between frontend creative coding, backend systems, and whatever new shiny
                catches my eye.
            </p>
            <p className="prose-aside">
                Current obsession: trying to improve my infra for a better &ldquo;reliability&rdquo;
                by migrating from docker to k8s.
            </p>
        </div>

        <Separator className="about-separator" />
        <p className="type-label about-label">Focus</p>
        <TechChipGroup role="list">
            {FOCUS.map(({ label, lead }) => (
                <TechChip key={label} role="listitem" tone={lead ? 'lead' : 'muted'}>
                    {label}
                </TechChip>
            ))}
        </TechChipGroup>
    </Section>
);
