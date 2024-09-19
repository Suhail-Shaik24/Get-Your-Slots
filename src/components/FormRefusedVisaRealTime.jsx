import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Navbar, ContactUs } from '../components'
import { ArrowWhite } from '../assets';
import '../css/Form.css';

const FormRefusedVisaRealTime = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Added loading state

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Email: '',
    VisaType: '',
    RealTimeAlertsPrice: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form data
    if (!formData.FirstName || !formData.LastName || !formData.PhoneNumber || !formData.RealTimeAlertsPrice) {
      alert('Please Fill All the Required Fields.');
      return;
    }

    // If the form is valid, process the form submission
    console.log('Form data submitted:', formData);

    // Show loading spinner
    setLoading(true);

    // API request (using fetch)
    fetch('https://us-central1-getyourslots-911db.cloudfunctions.net/addRefusedRealTimeAlert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);

        // Navigate to the submission success page
        navigate('/real-time-alerts-form-submitted');
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); // Hide loading spinner
        alert('An error occurred. Please try again.');
      });
  };

  return (
    <div className="p-4 md:p-5 lg:p-12 flex flex-col gap-3">
      <Navbar />

      <div className='flex flex-col items-center justify-center h-full font-[Open_Sans]'>

        <div className="form-container w-full bg-[#A3663C] h-72 p-3 lg:p-5 rounded-md flex flex-col gap-4">
          <h1 className='text-xl lg:text-2xl text-white font-bold font-["Open_Sans"]'> Real Time Alerts - Refused Visa </h1>
        </div>

        <div className="form-super-container -mt-60 lg:-mt-56 w-[96%] p-6 lg:p-12 lg:px-20 bg-white rounded-lg lg:rounded-xl border-2 border-[#a3663c] flex flex-col gap-6 lg:gap-8">
          {loading ? ( // Display loading spinner when loading
            <div className="flex justify-center items-center h-40">
              <ReactLoading type="bubbles" color="#A3663C" height={100} width={100} />
            </div>
          ) : (
            <form
              className='form flex flex-col gap-4 md:gap-6 lg:gap-8'
              onSubmit={handleSubmit}
            >

              <div className="names grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-2 justify-between w-full">
                <div className="firstName flex flex-col gap-3">
                  <label className='text-base lg:text-lg font-semibold'> First Name: </label>
                  <input
                    className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10'
                    type="text"
                    name='FirstName'
                    value={formData.FirstName}
                    onChange={handleInputChange}
                    placeholder='First Name'
                    required />
                </div>
                <div className="lastName flex flex-col gap-3">
                  <label className='text-base lg:text-lg font-semibold'> Last Name: </label>
                  <input
                    className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10'
                    type="text"
                    name='LastName'
                    value={formData.LastName}
                    onChange={handleInputChange}
                    placeholder='Last Name'
                    required />
                </div>
              </div>

              <div className="contact grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-2 justify-between w-full">
                <div className="phone-number flex flex-col gap-3">
                  <label className='text-base lg:text-lg font-semibold' > Phone Number (WhatsApp): </label>
                  <input
                    className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10'
                    type="tel"
                    name='PhoneNumber'
                    placeholder="Phone Number"
                    value={formData.PhoneNumber}
                    onChange={handleInputChange}
                    pattern="[0-9]{10}"
                    required />
                </div>
                <div className="email flex flex-col gap-3">
                  <label className='text-base lg:text-lg font-semibold' > Email: </label>
                  <input
                    className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10'
                    type="email"
                    name='Email'
                    value={formData.Email}
                    onChange={handleInputChange}
                    placeholder='Email' />
                </div>
              </div>

              {/* Visa Type and Appointment Selection */}
              <div className="visa-type-details grid grid-cols-1 gap-4 md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-2 justify-between w-full">
                {/* VISA Type Selection */}
                <div className="visa-type flex flex-col gap-2">
                  <div className="heading flex flex-col gap-1">
                    <h1 className='text-base lg:text-lg font-semibold'>VISA Type</h1>
                    <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-3/4' />
                  </div>
                  <div className="option1 flex ">
                    <input
                      className='radio-button'
                      type="radio"
                      id="F1-Visa"
                      name="VisaType"
                      value="F1-Visa"
                      checked
                      required
                      onChange={handleInputChange} />
                    <label className='label-name text-base lg:text-lg font-semibold w-2/4' for="F1-Visa">F1 Visa</label>
                  </div>
                </div>
              </div>

              {/* Subscription Plans Selection */}
              <div className="subscription-pricing grid grid-col-1 lg:grid-cols-2">
                <div className="visa-slot-booking-price flex flex-col gap-2">
                  <div className="heading flex flex-col gap-1">
                    <h1 className='text-base lg:text-lg font-semibold'> Subscription Plans <span className='text-sm'>(Select One)</span>:</h1>
                    <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-11/12' />
                  </div>
                  <div className="f1-plan flex flex-col gap-2">
                    <div className="options flex flex-col gap-1 ">
                      <div className="option1 flex ">
                        <input
                          className='radio-button'
                          type="radio"
                          id="plan-1"
                          name="RealTimeAlertsPrice"
                          value="₹1299 /30days"
                          onChange={handleInputChange}
                          required />
                        <label className='label-name text-base lg:text-lg font-semibold w-2/4' htmlFor="plan-1"> ₹1299/30days </label>
                      </div>
                      <div className="option2 flex">
                        <input
                          className='radio-button'
                          type="radio"
                          id="plan-2"
                          name="RealTimeAlertsPrice"
                          value="₹1799 /40 days"
                          onChange={handleInputChange}
                          required />
                        <label className='label-name text-base lg:text-lg font-semibold w-2/4' htmlFor="plan-2">₹1799/40 days</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                value="Proceed"
                className="submit-button flex bg-[#A3663C] text-lg lg:text-xl text-white w-fit font-semibold p-2 lg:p-3 px-5 lg:px-10 rounded-full gap-2 items-center hover:cursor-pointer">
                <p>Proceed</p>
                <img className='w-5 hover:cursor-pointer ' src={ArrowWhite} alt="Arrow" />
              </button>
            </form>
          )}
          {/* Contact Us */}
          <hr className='bg-[#a3663c] rounded-full h-[0.125rem]' />
          <ContactUs />
        </div>
      </div>
    </div>
  )
}

export default FormRefusedVisaRealTime