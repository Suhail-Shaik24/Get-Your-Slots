import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { QRFreshersRealTime } from '../components'; // Install this library for generating QR codes
import ReactLoading from 'react-loading';
import { Navbar, ContactUs } from '../components';
import { ArrowWhite, ArrowBlack } from '../assets';
import '../css/Form.css';

const FormRealTime = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Added loading state
  const [visaType, setVisaType] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // Track current page (1 = info, 2 = payment)
  const [verificationCode, setVerificationCode] = useState(''); // Store the generated verification code

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Email: '',
    VisaType: '',
    RealTimeAlertsPrice: '',
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
    // if (!formData.TransactionID) {
    //   alert('Please Enter the Transaction ID.');
    //   return;
    // }
    setLoading(true);

    // Submit the form data to API
    fetch('https://us-central1-getyourslots-911db.cloudfunctions.net/addRealTimeAlert', {
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
    return <QRFreshersRealTime amount={formData.paymentAmount} verificationCode={verificationCode} />;
  }, [formData.paymentAmount, verificationCode]);


  return (
    <div className="p-4 md:p-5 lg:p-12 flex flex-col gap-3">
      <Navbar />

      <div className="flex flex-col items-center justify-center h-full font-[Open_Sans]">
        <div className="form-container w-full bg-[#A3663C] h-72 p-3 lg:p-5 rounded-md flex flex-col gap-4">
          <h1 className="text-xl lg:text-2xl text-white font-bold">Real Time Alerts - Fresher Visa</h1>
        </div>

        <div className="form-super-container -mt-60 lg:-mt-56 w-[96%] p-6 lg:p-12 lg:px-20 bg-white rounded-lg border-2 border-[#a3663c] flex flex-col gap-6 lg:gap-8">
          {loading ? (
            <div className="flex justify-center items-center h-40">
              <ReactLoading type="bubbles" color="#A3663C" height={100} width={100} />
            </div>
          ) : (
            <>
              {currentPage === 1 && (
                <form
                  className='form flex flex-col gap-4 md:gap-6 lg:gap-8'
                  onSubmit={handleNext}
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
                        <h1 className='text-base lg:text-lg font-semibold'>VISA Type <span className='text-sm'>(Select One)</span>:</h1>
                        <hr className='bg-[#a3663c] rounded-full h-[0.125rem] w-3/4' />
                      </div>
                      <div className="option1 flex ">
                        <input
                          className='radio-button'
                          type="radio"
                          id="F1-Visa"
                          name="VisaType"
                          value="F1-Visa"
                          required
                          onChange={(e) => { handleVisaTypeChange(e); }} />
                        <label className='label-name text-base lg:text-lg font-semibold w-2/4' for="F1-Visa">F1 Visa</label>
                      </div>
                      <div className="option2 flex">
                        <input
                          className='radio-button'
                          type="radio"
                          id="B1/B2-Visa"
                          name="VisaType"
                          value="B1/B2-Visa"
                          required
                          onChange={(e) => { handleVisaTypeChange(e); }} />
                        <label className='label-name text-base lg:text-lg font-semibold w-2/4' for="B1/B2-Visa">B1/B2 Visa</label>
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
                      {visaType === '' && (
                        <p className='text-base font-semibold '>(Select a VISA Type to view Subscription Plans)</p>
                      )}
                      {visaType === 'F1-Visa' && (
                        <div className="f1-plan flex flex-col gap-2">
                          <h4 className='text-sm font-semibold text-white bg-[#3a4740] p-3 rounded-r-full w-fit'> For F1 VISA Alerts </h4>
                          <div className="options flex flex-col gap-1 ">
                            <div className="option1 flex ">
                              <input
                                className='radio-button'
                                type="radio"
                                id="plan-1"
                                name="RealTimeAlertsPrice"
                                value="₹899 /30 days"
                                data-amount="899"
                                onChange={handleInputChange}
                                required />
                              <label className='label-name text-base lg:text-lg font-semibold w-2/4' htmlFor="plan-1"> ₹899 /30 days </label>
                            </div>
                            <div className="option2 flex">
                              <input
                                className='radio-button'
                                type="radio"
                                id="plan-2"
                                name="RealTimeAlertsPrice"
                                value="₹1099 /40 days"
                                data-amount="1099"
                                onChange={handleInputChange}
                                required />
                              <label className='label-name text-base lg:text-lg font-semibold w-2/4' htmlFor="plan-2">₹1099 /40 days</label>
                            </div>
                          </div>
                        </div>
                      )}
                      {visaType === 'B1/B2-Visa' && (
                        <div className="b1-plan flex flex-col gap-2">
                          <h4 className='text-sm font-semibold text-white bg-[#3a4740] p-3 rounded-r-full w-fit'> For B1/B2 VISA Alerts </h4>
                          <div className="options flex flex-col gap-1 ">
                            <div className="option1 flex ">
                              <input
                                className='radio-button'
                                type="radio"
                                id="plan-3"
                                name="RealTimeAlertsPrice"
                                value="₹1999 /30 days"
                                data-amount="1999"
                                onChange={handleInputChange}
                                required />
                              <label className='label-name text-base lg:text-lg font-semibold w-2/4' htmlFor="plan-3"> ₹1999 /30 days </label>
                            </div>
                            <div className="option2 flex">
                              <input
                                className='radio-button'
                                type="radio"
                                id="plan-4"
                                name="RealTimeAlertsPrice"
                                value="₹2399 /40 days"
                                data-amount="2399"
                                onChange={handleInputChange}
                                required />
                              <label className='label-name text-base lg:text-lg font-semibold w-2/4' htmlFor="plan-4">₹2399 /40 days</label>
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
                  <h2 className="text-2xl font-bold">Payment Section</h2>

                  {/* displaying qr code */}
                  {memoizedQRCode}

                  <button
                    type="button"
                    value="back"
                    onClick={() => setCurrentPage(1)}
                    className="submit-button flex bg-gray-300 text-base lg:text-lg w-fit font-semibold p-1 lg:p-2 px-5 lg:px-6 rounded-full gap-2 items-center hover:cursor-pointer">
                    <img className='w-5 hover:cursor-pointer rotate-180 ' src={ArrowBlack} alt="Arrow" />
                    <p>Back</p>
                  </button>

                  <button
                    type="submit"
                    value="submit"
                    className="submit-button flex bg-[#A3663C] text-lg lg:text-xl text-white font-semibold p-2 lg:p-3 px-5 lg:px-10 rounded-full gap-2 items-center justify-center hover:cursor-pointer">
                    <p>Submit</p>
                    <img className='w-5 hover:cursor-pointer ' src={ArrowWhite} alt="Arrow" />
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