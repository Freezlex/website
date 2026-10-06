/** `matchMedia` that tolerates environments without it (jsdom, old browsers). */
export const matchesMedia = (query: string) =>
    typeof window !== 'undefined' &&
    typeof window.matchMedia === 'function' &&
    window.matchMedia(query).matches;

export const prefersReducedMotion = () => matchesMedia('(prefers-reduced-motion: reduce)');

export const canHover = () => matchesMedia('(hover: hover)');
