import * as React from 'react';
import {Link} from "react-router";
import {paths} from "../../../config/paths";

const NotFoundView = () => {
    return (
        <div>
            <h1>404 - Not found</h1>
            <p>Sorry, the page you are looking for does not exist. (yet ?)</p>
            <Link to={paths.home.getHref()} replace>
                Go to Home
            </Link>
        </div>
    )
}

export default NotFoundView;