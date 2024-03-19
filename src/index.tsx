import React from 'react';

import ReactDOM from 'react-dom/client';

import './index.scss';

import { RouterProvider } from "react-router-dom";

import { AuthContextProvider } from 'context/AuthContext';


import router from './route/router';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
      <AuthContextProvider>
        <RouterProvider router={router}/>
      </AuthContextProvider>
    </React.StrictMode>
);
