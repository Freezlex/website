import * as React from 'react';
import './glass-card.css';

type GlassCardProps = {
    className?: string;
    children?: React.ReactNode;
};

/** Frosted card with a soft spotlight that follows the pointer. */
export const GlassCard = ({ className, children }: GlassCardProps) => {
    const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
        const box = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty('--mouse-x', `${event.clientX - box.left}px`);
        event.currentTarget.style.setProperty('--mouse-y', `${event.clientY - box.top}px`);
    };

    return (
        <div
            className={['glass-card', className].filter(Boolean).join(' ')}
            onPointerMove={handlePointerMove}
        >
            {children}
        </div>
    );
};
