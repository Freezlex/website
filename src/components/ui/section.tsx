import * as React from 'react';
import './section.css';

type SectionProps = {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
};

/** A block of the main sheet: full-bleed rule, highlighted title, reading column. */
export const Section = ({ id, title, children, className }: SectionProps) => (
    <section id={id} className={['section', className].filter(Boolean).join(' ')}>
        <div className="section-rule" aria-hidden="true" />
        <div className="section-column">
            <h2 className="section-title scroll-blur-label">
                <span className="section-title-mark">{title}</span>
            </h2>
            <div className="section-body scroll-blur-in">{children}</div>
        </div>
    </section>
);

/** Thin horizontal divider. */
export const Separator = ({ className }: { className?: string }) => (
    <div role="none" className={['separator', className].filter(Boolean).join(' ')} />
);
