import React from 'react';

type HeadProps = {
    title?: string;
    description?: string;
};

/**
 * React 19 hoists `<title>` and `<meta>` into `document.head`, ahead of the
 * static fallbacks in `public/index.html`.
 */
export const Head = ({ title = '', description = '' }: HeadProps = {}) => {
    return (
        <>
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
        </>
    );
};
