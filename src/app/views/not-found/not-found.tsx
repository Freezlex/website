import * as React from 'react';
import {Link} from "react-router";
import {paths} from "@config/paths";
import {ContentLayout} from "@components/layouts/content-layout";
import {Section} from "@components/ui/section";

const NotFoundView = () => {
    return (
        <ContentLayout title={"404 · my.experiments"}>
            <Section id="not-found" title="404 - Not found">
                <div className="prose-reading">
                    <p>Sorry, the page you are looking for does not exist. (yet ?)</p>
                    <p>
                        <Link to={paths.home.getHref()} replace className="link-archive">
                            Go to Home →
                        </Link>
                    </p>
                </div>
            </Section>
        </ContentLayout>
    )
}

export default NotFoundView;
