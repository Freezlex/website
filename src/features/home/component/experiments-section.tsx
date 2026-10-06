import * as React from 'react';
import { Icon } from '@components/ui/icon';
import { Section, Separator } from '@components/ui/section';
import { TechChip, TechChipGroup } from '@components/ui/tech-chip';
import { homeSections } from '@config/paths';
import { github } from '@config/profile';
import './sections.css';

type Experiment = {
    title: string;
    description: string;
    tags: string[];
    preview: 'pulse' | 'lines';
    href?: string;
};

const EXPERIMENTS: Experiment[] = [
    {
        title: 'Privacy friendly RCS',
        description:
            'Trying to create an alternative to the RCS protocol, based on Matrix for better privacy. Because why not :)',
        tags: ['Kotlin', 'Matrix.org', 'RCS'],
        preview: 'pulse',
    },
    {
        title: 'Migrating to a Kubernetes cluster',
        description:
            "Life is short. So over-engineer something you could do in 3 hours with docker instead.",
        tags: ['Kubernetes', 'I Love Pain'],
        preview: 'lines',
    },
];

const Preview = ({ kind }: { kind: Experiment['preview'] }) => (
    <div className={`experiment-preview experiment-preview--${kind}`} aria-hidden="true">
        <div className="experiment-glow" />
        <div className="experiment-mock">
            {kind === 'pulse' ? (
                <span className="experiment-mock-icon">
                    <Icon name="waves" size={20} />
                </span>
            ) : (
                <span className="experiment-mock-lines">
                    <span className="line line--wide" />
                    <span className="line" />
                    <span className="line" />
                    <span className="line line--wide" />
                    <span className="line line--block" />
                </span>
            )}
        </div>
    </div>
);

export const ExperimentsSection = () => (
    <Section id={homeSections.experiments} title="Experiments">
        <div className="experiments-grid scroll-stagger">
            {EXPERIMENTS.map((experiment) => (
                <article key={experiment.title} className="experiment-card">
                    <Preview kind={experiment.preview} />
                    <div className="experiment-content">
                        <div className="experiment-header">
                            <h3>{experiment.title}</h3>
                            {experiment.href && (
                                <a
                                    href={experiment.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="experiment-link"
                                    aria-label={`Open ${experiment.title}`}
                                >
                                    <Icon name="external-link" size={18} />
                                </a>
                            )}
                        </div>
                        <p className="experiment-description">{experiment.description}</p>
                        <TechChipGroup role="list">
                            {experiment.tags.map((tag) => (
                                <TechChip key={tag} role="listitem" tone="lead">
                                    {tag}
                                </TechChip>
                            ))}
                        </TechChipGroup>
                    </div>
                </article>
            ))}
        </div>

        {github && (
            <div className="experiments-footer">
                <Separator />
                <a
                    href={`${github.url}?tab=repositories`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-archive"
                >
                    View the graveyard
                    <Icon name="arrow-right" size={14} />
                </a>
            </div>
        )}
    </Section>
);
