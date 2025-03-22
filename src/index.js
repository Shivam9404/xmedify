import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Search from "./Search/Search";
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Home/Home";
import MyBookings from "./MyBookings/MyBookings";
// import { ThemeProvider } from "@mui/material/styles"; // Uncomment if using MUI
// import theme from "./theme"; // Uncomment if using a theme

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "search",
        element: <Search />
      },
      {
        path: "my-bookings",
        element: <MyBookings />
      },
      {
        path: "",
        element: <Home />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}> Uncomment if using ThemeProvider */}
      <RouterProvider router={router} />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

reportWebVitals();
