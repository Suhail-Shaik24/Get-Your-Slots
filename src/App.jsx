import React from 'react';
import { Home, Footer, FormRealTime, FormVisaSlot, SuccessRealTimeAlerts, SuccessVisaSlotBooking, NotFound  } from "./components";
import { HashRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

function App() {

  const router = HashRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/visa-slot-booking-form",
      element: <FormVisaSlot />
    },
    {
      path: "/real-time-alerts-form",
      element: <FormRealTime/>
    },
    {
      path: "/real-time-alerts-form-submitted",
      element: <SuccessRealTimeAlerts/>
    },
    {
      path: "/visa-slot-booking-form-submitted",
      element: <SuccessVisaSlotBooking/>
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
