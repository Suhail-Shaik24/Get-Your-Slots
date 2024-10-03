import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Navbar, ContactUs, QRFreshersRealTime } from '../components';
import { ArrowWhite, ArrowBlack, GooglePay2, Paytm } from '../assets';
import '../css/Form.css';

const FormRealTime = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Added loading state
  const [currentPage, setCurrentPage] = useState(1); // Track current page (1 = info, 2 = payment)
  const [verificationCode, setVerificationCode] = useState(''); // Store the generated verification code
  const [isChecked, setIsChecked] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);
  
  const [visaType, setVisaType] = useState('');

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Email: '',
    VisaType: '',
    RealTimeAlertsPrice: '',
    paymentApp: 'GooglePay',  // Default value
  });

  const handleInputChange = (e) => {
    const { name, value, dataset } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      paymentAmount: dataset?.amount || prevData.paymentAmount,
    }));
  };

  const handleVisaTypeChange = (e) => {
    setVisaType(e.target.value);
    handleInputChange(e);
  };

  const handleNext = (e) => {
    e.preventDefault();
    // Validate form data before proceeding to the next page
    if (!formData.FirstName || !formData.LastName || !formData.PhoneNumber || !formData.RealTimeAlertsPrice) {
      alert('Please Fill All the Required Fields.');
      return;
    }
    setCurrentPage(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Submit the form data to API
    fetch('https://us-central1-getyourslots-3bf5f.cloudfunctions.net/addRealTimeAlert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        navigate('/real-time-alerts-form-submitted');
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false); // Hide loading spinner
        alert('An error occurred. Please try again.');
      });
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  // Handle payment app selection without submitting the form
  const handleAppSelection = (app) => {
    setSelectedApp(app);
    setFormData((prevData) => ({
      ...prevData,
      paymentApp: app,
    }));
  };

  useEffect(() => {
    if (currentPage === 2) {
      // Generate the random verification code when moving to the payment section
      const generateRandomString = () => Math.random().toString(36).substring(2, 10).toUpperCase();
      const randomCode = generateRandomString();

      // Set the generated code in both verificationCode state and formData
      setVerificationCode(randomCode);  // Correctly set the verificationCode state

      // Update formData to include the verification code
      setFormData((prevData) => ({
        ...prevData,
        verificationCode: randomCode  // Update formData with the verification code
      }));
    }
  }, [currentPage]);

  // Memoize QR Code to prevent re-renders when other inputs change
  const memoizedQRCode = useMemo(() => {
    return selectedApp ? (
      <div className="transition-all duration-700 ease-in-out">
        <QRFreshersRealTime amount={formData.paymentAmount} verificationCode={verificationCode} selectedApp={selectedApp} />
      </div>
    ) : null;
  }, [formData.paymentAmount, verificationCode, selectedApp]);

  // Check if submit button should be enabled
  const isSubmitEnabled = selectedApp && isChecked;

  return (
    <div className="flex flex-col gap-3 p-4 md:p-5 lg:p-12">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-full font-[Open_Sans]">
        <div className="form-container w-full bg-[#A3663C] h-72 p-3 lg:p-5 rounded-md flex flex-col gap-4">
          <h1 className="text-xl font-bold text-white lg:text-2xl">Real Time Alerts - Fresher Visa</h1>
        </div>

        <div className="form-super-container -mt-60 lg:-mt-56 w-[96%] p-6 lg:p-12 lg:px-20 bg-white rounded-lg border-2 border-[#a3663c] flex flex-col gap-6 lg:gap-8">
          {loading ? (
            <div className="flex items-center justify-center h-40">
              <ReactLoading type="bubbles" color="#A3663C" height={100} width={100} />
            </div>
          ) : (
            <>
              {currentPage === 1 && (
                <form
                  className='flex flex-col gap-4 form md:gap-6 lg:gap-8'
                  onSubmit={handleNext}
                >

                  <div className="grid justify-between w-full grid-cols-1 gap-4 names md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col gap-3 firstName">
                      <label className='text-base font-semibold lg:text-lg'> First Name: </label>
                      <input
                        className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10'
                        type="text"
                        name='FirstName'
                        value={formData.FirstName}
                        onChange={handleInputChange}
                        placeholder='First Name'
                        required />
                    </div>
                    <div className="flex flex-col gap-3 lastName">
                      <label className='text-base font-semibold lg:text-lg'> Last Name: </label>
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

                  <div className="grid justify-between w-full grid-cols-1 gap-4 contact md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-2">
                    <div className="flex flex-col gap-3 phone-number">
                      <label className='text-base font-semibold lg:text-lg' > Phone Number (WhatsApp): </label>
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
                    <div className="flex flex-col gap-3 email">
                      <label className='text-base font-semibold lg:text-lg' > Email: </label>
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
                  <div className="grid justify-between w-full grid-cols-1 gap-4 visa-type-details md:gap-6 lg:gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {/* VISA Type Selection */}
                    <div className="flex flex-col gap-2 visa-type">
                      <div className="flex flex-col gap-1 heading">
                        <h1 className='text-base font-semibold lg:text-lg'>VISA Type <span className='text-sm'>(Select One)</span>:</h1>
                        <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-3/4' />
                      </div>
                      <div className="flex option1 ">
                        <input
                          className='radio-button'
                          type="radio"
                          id="F1-Visa"
                          name="VisaType"
                          value="F1-Visa"
                          required
                          onChange={(e) => { handleVisaTypeChange(e); }} />
                        <label className='w-2/4 text-base font-semibold label-name lg:text-lg' for="F1-Visa">F1 Visa</label>
                      </div>
                      <div className="flex option2">
                        <input
                          className='radio-button'
                          type="radio"
                          id="B1/B2-Visa"
                          name="VisaType"
                          value="B1/B2-Visa"
                          required
                          onChange={(e) => { handleVisaTypeChange(e); }} />
                        <label className='w-2/4 text-base font-semibold label-name lg:text-lg' for="B1/B2-Visa">B1/B2 Visa</label>
                      </div>
                    </div>
                  </div>

                  {/* Subscription Plans Selection */}
                  <div className="grid subscription-pricing grid-col-1 lg:grid-cols-2">
                    <div className="flex flex-col gap-2 visa-slot-booking-price">
                      <div className="flex flex-col gap-1 heading">
                        <h1 className='text-base font-semibold lg:text-lg'> Subscription Plans <span className='text-sm'>(Select One)</span>:</h1>
                        <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-11/12' />
                      </div>
                      {visaType === '' && (
                        <p className='text-base font-semibold '>(Select a VISA Type to view Subscription Plans)</p>
                      )}
                      {visaType === 'F1-Visa' && (
                        <div className="flex flex-col gap-2 f1-plan">
                          <h4 className='text-sm font-semibold text-white bg-[#3a4740] p-3 rounded-r-full w-fit'> For F1 VISA Alerts </h4>
                          <div className="flex flex-col gap-1 options ">
                            <div className="flex option1 ">
                              <input
                                className='radio-button'
                                type="radio"
                                id="plan-1"
                                name="RealTimeAlertsPrice"
                                value="₹899 /30 days"
                                data-amount="899"
                                onChange={handleInputChange}
                                required />
                              <label className='w-2/4 text-base font-semibold label-name lg:text-lg' htmlFor="plan-1"> ₹899 /30 days </label>
                            </div>
                            <div className="flex option2">
                              <input
                                className='radio-button'
                                type="radio"
                                id="plan-2"
                                name="RealTimeAlertsPrice"
                                value="₹1099 /40 days"
                                data-amount="1099"
                                onChange={handleInputChange}
                                required />
                              <label className='w-2/4 text-base font-semibold label-name lg:text-lg' htmlFor="plan-2">₹1099 /40 days</label>
                            </div>
                          </div>
                        </div>
                      )}
                      {visaType === 'B1/B2-Visa' && (
                        <div className="flex flex-col gap-2 b1-plan">
                          <h4 className='text-sm font-semibold text-white bg-[#3a4740] p-3 rounded-r-full w-fit'> For B1/B2 VISA Alerts </h4>
                          <div className="flex flex-col gap-1 options ">
                            <div className="flex option1 ">
                              <input
                                className='radio-button'
                                type="radio"
                                id="plan-3"
                                name="RealTimeAlertsPrice"
                                value="₹1999 /30 days"
                                data-amount="1999"
                                onChange={handleInputChange}
                                required />
                              <label className='w-2/4 text-base font-semibold label-name lg:text-lg' htmlFor="plan-3"> ₹1999 /30 days </label>
                            </div>
                            <div className="flex option2">
                              <input
                                className='radio-button'
                                type="radio"
                                id="plan-4"
                                name="RealTimeAlertsPrice"
                                value="₹2399 /40 days"
                                data-amount="2399"
                                onChange={handleInputChange}
                                required />
                              <label className='w-2/4 text-base font-semibold label-name lg:text-lg' htmlFor="plan-4">₹2399 /40 days</label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    value="Proceed"
                    className="submit-button flex bg-[#A3663C] text-lg lg:text-xl text-white w-fit font-semibold p-2 lg:p-3 px-5 lg:px-10 rounded-full gap-2 items-center hover:cursor-pointer">
                    <p>Next</p>
                    <img className='w-5 hover:cursor-pointer ' src={ArrowWhite} alt="Arrow" />
                  </button>
                </form>
              )}
              {currentPage === 2 && (
                <form className="flex flex-col gap-4" onSubmit={handlePaymentSubmit}>
                  {/* Second Page: Payment */}
                  <h2 className="mb-6 text-3xl font-bold text-center">Payment Section</h2>
                  <h3 className="mb-4 text-lg text-center text-gray-700">Select a Payment App to make a Payment</h3>

                  {/* Payment Apps */}
                  <div className="grid items-center justify-center grid-cols-2 gap-6 paymentApps">
                    <div
                      className={`GPay flex flex-col items-center bg-white border-2 h-24 p-3 rounded-xl justify-center hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer ${selectedApp === 'GooglePay' ? 'ring-2 ring-[#a3663c] bg-gray-100' : ''}`}
                      onClick={() => handleAppSelection('GooglePay')}
                    >
                      <img className="mb-2 w-36" src={GooglePay2} alt="GPay" />
                      <span className="text-sm text-gray-700">Google Pay</span>
                    </div>
                    <div
                      className={`Paytm flex flex-col items-center bg-white border-2 h-24 p-3 rounded-xl justify-center hover:bg-gray-100 transition-all duration-300 ease-in-out cursor-pointer ${selectedApp === 'Paytm' ? 'ring-2 ring-[#a3663c] bg-gray-100' : ''}`}
                      onClick={() => handleAppSelection('Paytm')}
                    >
                      <img className="w-24 mb-2" src={Paytm} alt="Paytm" />
                      <span className="text-sm text-gray-700">Paytm</span>
                    </div>

                  </div>
                  <p className="p-4 mb-3 text-sm font-semibold text-center text-red-500 bg-red-100 border border-red-500 rounded-lg shadow-md lg:text-base md:text-base" >
                    Note: Please use only Google Pay or Paytm to complete the payment.
                  </p>


                  {/* QR Code and Checkbox */}
                  {selectedApp && (
                    <div className="mt-6 transition-opacity duration-500 ease-in-out opacity-100">
                      {memoizedQRCode}
                      <div className="flex items-center gap-2 p-3 mt-4 border rounded-md payment-checkbox bg-gray-50 hover:bg-gray-100">
                        <input
                          className="w-6 h-6 cursor-pointer"
                          type="checkbox"
                          required
                          id="payment-confirmation"
                          onChange={handleCheckboxChange}
                        />
                        <label
                          className="text-base font-bold text-gray-700 cursor-pointer lg:text-xl"
                          htmlFor="payment-confirmation"
                        >
                          I have made the Payment
                        </label>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <button
                    type="button"
                    value="back"
                    onClick={() => setCurrentPage(1)}
                    className="flex items-center gap-2 p-1 px-5 text-base font-semibold bg-gray-300 rounded-full submit-button lg:text-lg w-fit lg:p-2 lg:px-6 hover:cursor-pointer">
                    <img className='w-5 rotate-180 hover:cursor-pointer ' src={ArrowBlack} alt="Arrow" />
                    <p>Back</p>
                  </button>

                  <button
                    type="submit"
                    value="submit"
                    disabled={!isSubmitEnabled} // Disable button if conditions are not met
                    className={`submit-button flex bg-${isSubmitEnabled ? '[#A3663C]' : 'gray-300'} text-lg lg:text-xl text-white font-semibold p-2 lg:p-3 px-5 lg:px-10 rounded-full gap-2 items-center justify-center ${!isSubmitEnabled && 'cursor-not-allowed'}`}>
                    <p>Submit</p>
                    <img className='w-5 hover:cursor-pointer' src={ArrowWhite} alt="Arrow" />
                  </button>
                </form>
              )}
            </>
          )}
          {/* Contact Us */}
          <hr className='bg-[#a3663c] rounded-full h-[0.125rem]' />
          <ContactUs />
        </div>
      </div>
    </div>
  );
};

export default FormRealTime;