import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from 'react-router';
import HomeComponent from '@views/home/home.component';
import NotFoundComponent from '@views/not-found/not-found.component';
import ProjectsComponent from "@views/projects/projects.component";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter(
  [
      {
          path: "/",
          element: <HomeComponent />
      },
      {
          path: "/projects",
          element: <ProjectsComponent />
      },
      {
          path: "*",
          element: <NotFoundComponent />
      },
  ],
  {
      future: {
          // Normalize `useNavigation()`/`useFetcher()` `formMethod` to uppercase
          v7_normalizeFormMethod: true,
      },
  });

root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
