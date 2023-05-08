import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './components/AddCoffee.jsx';
import EditCoffee from './components/EditCoffee.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffees')
  },
  {
    path: "/coffee",
    element: <AddCoffee></AddCoffee>
  },
  {
    path: "/updateCoffee/:id",
    element: <EditCoffee></EditCoffee>,
    loader: ({params}) => fetch(`http://localhost:5000/coffees/${params.id}`)
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
