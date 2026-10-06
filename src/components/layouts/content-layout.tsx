import * as React from 'react';
import './content-layout.css';

import { Head } from "@components/seo";

type ContentLayoutProps = {
    children: React.ReactNode;
    title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
    return (
        <div id='ctx-layout'>
            <Head title={title} />
            <div className="page-content">
                {children}
            </div>
        </div>
    );
};