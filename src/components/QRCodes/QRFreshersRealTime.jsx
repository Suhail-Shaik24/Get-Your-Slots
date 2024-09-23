import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRFreshersRealTime = ({ amount, verificationCode, selectedApp }) => {
  const UPI_ID = "chaitusane777-1@okicici";
  const NAME = "Chaitu%20Sane";
  // const amount = "899";
  // const Transaction_Message = "suhail";

  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}`;
  const gpayLink = `intent://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;


  const userAgent = navigator.userAgent;
  const isAndroid = /android/i.test(userAgent);
  const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;





  return (
    <div className="border-2 border-[#a3663c] w-full p-4 rounded-lg flex flex-col gap-3 justify-center items-center bg-gray-100 shadow-lg">
      <h2 className="text-xl font-bold font-['Open_Sans']font-semibold mb-2 text-center">Proceed to Pay <br /> <span className="text-4xl"> ₹{amount} </span></h2>

      {/* <button type="button" className=" font-bold text-white text-lg bg-[#2e358f] p-3 rounded lg:hidden" onClick={handlePayment}>Tap here to Pay</button> */}
      {isIOS ? (
        // For iOS: Use anchor tag with the generic UPI URL
        <a
          href={upiUrl}
          className="font-bold text-white text-lg bg-[#2e358f] p-3 rounded lg:hidden text-center">
          Tap here to Pay
        </a>
      ) : (
        // For Android: Use intent URL for Google Pay and Paytm
        <button
          type="button"
          className="font-bold text-white text-lg bg-[#2e358f] p-3 rounded lg:hidden"
          onClick={() => {
            if (selectedApp === "GooglePay") {
              window.location.href = gpayLink;
            } else if (selectedApp === "Paytm") {
              window.location.href = upiUrl;
            }
          }}>
          Tap here to Pay
        </button>
      )}
      <p className="text-center text-red-500 mb-3 p-4 bg-red-100 border border-red-500 rounded-lg shadow-md text-sm md:text-base lg:hidden" >
        Note: Make sure to <span className="font-bold">Come Back and Submit the Form </span> after the Payment.
      </p>
      <p className="text-center text-red-500 mb-3 p-4 bg-red-100 border border-red-500 rounded-lg shadow-md text-sm md:text-base hidden lg:block" >
        Note: Make sure to <span className="font-bold">Submit the Form </span> after the Payment.
      </p>

      <p className="lg:hidden">or Scan the QR Code</p>
      <h3 className="hidden text-lg font-semibold lg:block"> Scan the QR Code to make the Payment</h3>
      <QRCodeSVG value={upiUrl} size={256} />
    </div>

  );
};
export default QRFreshersRealTime;
