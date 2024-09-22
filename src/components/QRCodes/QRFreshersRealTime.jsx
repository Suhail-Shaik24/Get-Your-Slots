import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRFreshersRealTime = ({ amount, verificationCode, selectedApp }) => {
  const UPI_ID = "chaitusane777-1@okicici";
  const NAME = "Chaitu%20Sane";
  // const amount = "899";
  // const Transaction_Message = "suhail";

  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}`;

  const handlePayment = () => {
    const userAgent = navigator.userAgent;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    if (selectedApp === "GooglePay") {
      if (isAndroid) {
        const gpayLink = `intent://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
        window.location.href = gpayLink;
      } else if (isIOS) {
        // Use direct UPI link for iOS
        window.location.href = upiUrl;
      }
    } else if (selectedApp === "Paytm") {
      // Use generic UPI link for both Android and iOS
      window.location.href = upiUrl;
    }
  };



  return (
    <div className="border-2 border-[#a3663c] w-full p-4 rounded-lg flex flex-col gap-3 justify-center items-center bg-gray-100 shadow-lg">
      <h2 className="text-xl font-bold font-['Open_Sans']font-semibold mb-2 text-center">Proceed to Pay <br /> <span className="text-4xl"> ₹{amount} </span></h2>

      <button type="button" className=" font-bold text-white text-lg bg-[#2e358f] p-3 rounded lg:hidden" onClick={handlePayment}>Tap here to Pay</button>
      <p className="text-center text-red-500 font-semibold mb-3 p-4 bg-red-100 border border-red-500 rounded-lg shadow-md text-sm md:text-base lg:hidden" >
        Note: Make sure to come back and Submit the form after the Payment.
      </p>

      <p className="lg:hidden">or Scan the QR Code</p>
      <h3 className="hidden text-lg font-semibold lg:block"> Scan the QR Code to make the Payment</h3>
      <QRCodeSVG value={upiUrl} size={256} />
    </div>

  );
};
export default QRFreshersRealTime;
