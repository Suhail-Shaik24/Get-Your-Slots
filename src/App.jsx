import React from 'react';
import { Home, Footer, FormVisaSlot, NotFound } from "./components";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/visa-slot-booking-form",
      element: <FormVisaSlot />
    },
    {
      path: "*",
      element: <NotFound />
    }
  ])

  return (
    <div className='bg-[#E6E4E2]'>
      <RouterProvider router={router} />
      <Footer />
    </div>
  )
}

export default App
