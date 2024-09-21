import React, { useState, useMemo, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import ReactLoading from 'react-loading';
import { Navbar, ContactUs, QRFreshersRealTime } from '../components'
import { ArrowWhite, ArrowBlack } from '../assets';
import '../css/Form.css';

const FormRefusedVisaRealTime = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Added loading state
  const [currentPage, setCurrentPage] = useState(1); // Track current page (1 = info, 2 = payment)
  const [verificationCode, setVerificationCode] = useState(''); // Store the generated verification code
  const [isChecked, setIsChecked] = useState(false);


  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    PhoneNumber: '',
    Email: '',
    VisaType: '',
    RealTimeAlertsPrice: '',
    paymentApp: 'GooglePay',  // Default value
    paymentAppOther: ''   // For "Other" option
  });

  const handleInputChange = (e) => {
    const { name, value, dataset } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
      paymentAmount: dataset?.amount || prevData.paymentAmount,
    }));
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
    fetch('https://us-central1-getyourslots-3bf5f.cloudfunctions.net/addRefusedRealTimeAlert', {
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
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  const handleSelectChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      paymentApp: value,
      paymentAppOther: ''  // Reset the "Other" input when the dropdown is changed
    }));
  };
  const handleOtherInputChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      paymentAppOther: value
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
    return <QRFreshersRealTime amount={formData.paymentAmount} verificationCode={verificationCode} />;
  }, [formData.paymentAmount, verificationCode]);


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
                              data-amount="1299"
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
                              data-amount="1799"
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
                  <div className='payment-checkbox flex flex-col gap-3 p-4 border rounded-md bg-gray-50 hover:bg-gray-100'>
                    <div className="payment-confirmation flex items-center gap-2">
                      <input
                        className='w-6 h-6 hover:cursor-pointer focus:ring-blue-500 focus:ring-2'
                        type="checkbox"
                        required
                        id="payment-confirmation"
                        onChange={handleCheckboxChange} // Handle checkbox change
                      />
                      <label
                        className='text-xl font-bold text-gray-700 hover:text-gray-900 cursor-pointer select-none'
                        htmlFor="payment-confirmation"
                      >
                        I have made the Payment
                      </label>
                    </div>

                    {/* Conditionally render payment-app dropdown based on checkbox status */}
                    {isChecked && (
                      <div className="payment-app space-y-4">
                        <label
                          htmlFor="payment-app"
                          className="block text-xl font-medium text-gray-700"
                        >
                          Which app have you used for Payment?
                        </label>

                        <select
                          name="paymentApp"
                          id="payment-app"
                          onChange={handleSelectChange}
                          value={formData.paymentApp}
                          required
                          className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                        >
                          <option value="GooglePay">GooglePay</option>
                          <option value="PhonePay">PhonePay</option>
                          <option value="Paytm">Paytm</option>
                          <option value="Other">Other</option>
                        </select>

                        {/* Show input field when "Other" is selected */}
                        {formData.paymentApp === 'Other' && (
                          <input
                            type="text"
                            placeholder="Enter payment app"
                            name="paymentAppOther"
                            value={formData.paymentAppOther || ''}
                            onChange={handleOtherInputChange}
                            className="block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                          />
                        )}
                      </div>
                    )}
                  </div>

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
  )
}

export default FormRefusedVisaRealTime