import React, {useContext} from 'react';
import './App.scss';
import ThemeContext, {ThemeContextProvider} from "./shared/ThemeProvider/ThemeContext";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Homepage from "./homepage/Homepage";
import Home from "./pages/home/Home";

const WrappedApp = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        }
    ])

    const { isDark } = useContext(ThemeContext);
    return (
        <div className={`Screen ${isDark ? "theme--dark" : "theme--light"}`}>
            <RouterProvider router={router}/>
        </div>
    );
}

const App = () => {
  return (
      <ThemeContextProvider>
          <WrappedApp/>
      </ThemeContextProvider>
  );
}

export default App;
