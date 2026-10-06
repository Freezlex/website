import {createBrowserRouter} from "react-router";
import { RouterProvider } from "react-router";
import * as React from "react";
import {lazy} from "react";
import {paths} from "../config/paths";
const NotFound = lazy(() => import('./views/not-found/not-found'));
const Home = lazy(() => import('./views/home/home'));

export const createAppRouter = () =>
    createBrowserRouter([
        {
            path: paths.home.getHref(),
            element: <Home/>,
        },
        {
            path: "*",
            element: <NotFound />
        }
    ])

export const AppRouter = () => {
    const router = createAppRouter();
    return <RouterProvider router={router} />;
}