import * as React from 'react';
import { GlassCard } from '@components/ui/glass-card';
import { Icon, type IconName } from '@components/ui/icon';
import { Section } from '@components/ui/section';
import { homeSections } from '@config/paths';
import './sections.css';

type Stat = { value: string; label: string; icon: IconName; tone: 'blue' | 'green' | 'red' };

const STATS: Stat[] = [
    { value: '∞', label: 'Coffee consumed', icon: 'coffee', tone: 'blue' },
  { value: '50+', label: 'Abandoned repos', icon: 'git-branch', tone: 'green' },
    { value: '3+ years', label: 'Late on some projects...', icon: 'waves', tone: 'red' },
];

export const StatsSection = () => (
    <Section id={homeSections.stats} title="Stack & Stats">
        <div className="stats-grid scroll-stagger">
            {STATS.map(({ value, label, icon, tone }) => (
                <GlassCard key={label} className="stat-card">
                    <span className={`stat-icon stat-icon--${tone}`}>
                        <Icon name={icon} size={18} strokeWidth={2} />
                    </span>
                    <span className="stat-value">{value}</span>
                    <span className="stat-label">{label}</span>
                </GlassCard>
            ))}
        </div>
    </Section>
);
