import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Register from './pages/welcome/Register.jsx';
import Login from './pages/welcome/Login.jsx';
import PasswordReset from './pages/welcome/PasswordReset.jsx';
import PasswordUpdateForm from './pages/welcome/PasswordUpdateForm.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/password-reset",
    element: <PasswordReset/>,
  },
  {
    path: "/password-update",
    element: <PasswordUpdateForm/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>,
)
