import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Episodes from './pages/Episodes';
import Shop from './pages/Shop';
import Events from './pages/Events';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'episodes',
        element: <Episodes />
      },
      {
        path: 'shop',
        element: <Shop />
      },
      {
        path: 'events',
        element: <Events />
      }
    ]
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
