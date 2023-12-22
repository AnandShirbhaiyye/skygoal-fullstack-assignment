import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './views/Login/Login';
import SignUp from './views/SignUp/SignUp';
import UserDetails from './views/UserDetails/UserDetails';

//boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';



const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
      path:'/',
      element:<UserDetails/>
  },
  {
      path:'/login',
      element:<Login/>
  },
  {
      path:'/signup',
      element:<SignUp/>
  },
  
])
root.render(<RouterProvider router = {router} />
);


