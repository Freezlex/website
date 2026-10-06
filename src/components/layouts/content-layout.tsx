import * as React from 'react';
import './content-layout.css';

import { Head } from "@components/seo";
import { Grain, Waves } from "@components/ui/waves";
import { usePointerParallax } from "@hooks/use-pointer-parallax";
import { useStickyFit } from "@hooks/use-sticky-fit";

type ContentLayoutProps = {
    children: React.ReactNode;
    title: string;
    description?: string;
    /** Rendered in the sticky stage the content sheet slides over. */
    hero?: React.ReactNode;
    /** Rendered after the content sheet (e.g. a contact stage). */
    footer?: React.ReactNode;
};

export const ContentLayout = ({ children, title, description, hero, footer }: ContentLayoutProps) => {
    const asideRef = React.useRef<HTMLElement>(null);
    usePointerParallax(asideRef);
    useStickyFit(asideRef);

    return (
        <div id='ctx-layout'>
            <Head title={title} description={description} />
            <a className="skip-link" href="#main-content">Skip to content</a>
            <Grain />
            <div className={hero ? "split-shell" : "split-shell split-shell--flat"}>
                {hero && (
                    <aside ref={asideRef} className="split-aside">
                        <Waves />
                        {hero}
                    </aside>
                )}
                <main id="main-content" className="split-main" tabIndex={-1}>
                    {children}
                </main>
            </div>
            {footer}
        </div>
    );
};
