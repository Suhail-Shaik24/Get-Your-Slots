import React from 'react';
import { Home, Footer, FormRealTime, FormRefusedVisaRealTime, FormVisaSlot, SuccessRealTimeAlerts, SuccessVisaSlotBooking, NotFound, ScrollToTop } from "./components";
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='bg-[#E6E4E2]'>
      <HashRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/real-time-alerts-FreshersVisaForm" element={<FormRealTime />} />
          <Route path="/real-time-alerts-RefusedVisaForm" element={<FormRefusedVisaRealTime />} />
          <Route path="/real-time-alerts-form-submitted" element={<SuccessRealTimeAlerts />} />
          <Route path="/visa-slot-booking-form" element={<FormVisaSlot />} />
          <Route path="/visa-slot-booking-form-submitted" element={<SuccessVisaSlotBooking />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;