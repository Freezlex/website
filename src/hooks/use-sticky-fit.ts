import * as React from 'react';

export const useStickyFit = (ref: React.RefObject<HTMLElement | null>) => {
    React.useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const update = () => {
            const margin = parseFloat(getComputedStyle(element).marginTop) || 0;
            const top = Math.min(margin, window.innerHeight - element.offsetHeight - margin);
            element.style.setProperty('--sticky-top', `${top}px`);
        };

        update();
        const observer = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(update);
        observer?.observe(element);
        window.addEventListener('resize', update);
        return () => {
            observer?.disconnect();
            window.removeEventListener('resize', update);
            element.style.removeProperty('--sticky-top');
        };
    }, [ref]);
};
