import * as React from 'react';
import './waves.css';

/** Slow, blurred "silk" layers + the faint grid; fills its positioned parent. */
export const Waves = () => (
    <>
        <div className="waves" aria-hidden="true">
            <span />
            <span />
            <span />
            <span />
        </div>
        <div className="waves-grid" aria-hidden="true" />
    </>
);

/** Film grain over the whole page. */
export const Grain = () => <div className="grain" aria-hidden="true" />;
