import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRFreshersRealTime = ({ amount, verificationCode, selectedApp }) => {
  const UPI_ID = "chaitusane777-1@okicici";
  const NAME = "Chaitu%20Sane";
  // const amount = "899";
  // const Transaction_Message = "suhail";

  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}`;

  // GPay specific UPI deep link with Android intent
  const gpayLink = `intent://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
  const gpayPlayStoreLink = 'https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user';

  //Paytm specific UPI deep link with Android intent
  const paytmLink = `intent://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}#Intent;scheme=paytm;package=com.paytm.app;end`;
  const paytmPlayStoreLink = 'https://play.google.com/store/apps/details?id=com.paytm.app';

  const handlePayment = () => {
    if (selectedApp === "GooglePay") {
      window.location.href = gpayLink;

      // Set a timeout to redirect to Play Store if Google Pay isn't installed
      setTimeout(() => {
        window.location.href = gpayPlayStoreLink;
      }, 2500);
    } else if (selectedApp === "Paytm") {
      window.location.href = paytmLink;

      // Set a timeout to redirect to Play Store if Paytm isn't installed
      setTimeout(() => {
        window.location.href = paytmPlayStoreLink;
      }, 2500);
    }

    // Set a timeout to redirect to Play Store if Google Pay isn't installed
    setTimeout(() => {
      window.location.href = gpayPlayStoreLink;
    }, 2500); // Adjust the timeout duration as necessary
  };



  return (
    <div className="border-2 border-[#a3663c] w-full p-4 rounded-lg flex flex-col gap-3 justify-center items-center bg-gray-100 shadow-lg">
      <h2 className="text-xl font-bold font-['Open_Sans']font-semibold mb-2 text-center">Proceed to Pay <br /> <span className="text-4xl"> ₹{amount} </span></h2>

      <button className=" font-bold text-white text-lg bg-[#2e358f] p-3 rounded lg:hidden" onClick={handlePayment}>Tap here to Pay</button>

      <p className="lg:hidden">or Scan the QR Code</p>
      <h3 className="hidden text-lg font-semibold lg:block"> Scan the QR Code to make the Payment</h3>
      <QRCodeSVG value={upiUrl} size={256} />
    </div>

  );
};
export default QRFreshersRealTime;

//chaitusane777-1@okicici
//Chaitu%20Sane
// pa: Payee Address (Your UPI ID)
// pn: Payee Name (Your name)
// am: Amount
// cu: Currency (INR for Indian Rupees)
// tn: Transaction note (optional)
