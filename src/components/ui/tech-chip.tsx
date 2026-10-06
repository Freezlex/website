import * as React from 'react';
import './tech-chip.css';

/**
 * Two weights so a row of chips reads as a hierarchy instead of noise:
 * `lead` for what matters, `muted` for the supporting cast.
 */
type TechChipTone = 'lead' | 'muted';

type TechChipProps = React.HTMLAttributes<HTMLSpanElement> & {
    tone?: TechChipTone;
};

export const TechChip = ({ tone = 'muted', className, ...props }: TechChipProps) => (
    <span
        className={['tech-chip', `tech-chip--${tone}`, className].filter(Boolean).join(' ')}
        {...props}
    />
);

export const TechChipGroup = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
    <div className={['tech-chip-group', className].filter(Boolean).join(' ')} {...props} />
);
