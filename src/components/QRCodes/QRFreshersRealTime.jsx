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
  // const gpayPlayStoreLink = 'https://play.google.com/store/apps/details?id=com.google.android.apps.nbu.paisa.user';

  //Paytm specific UPI deep link with Android intent
  const paytmLink = `intent://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}#Intent;scheme=paytm;package=com.paytm.app;end`;
  // const paytmPlayStoreLink = 'https://play.google.com/store/apps/details?id=com.paytm.app';

  const handlePayment = () => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;

    if (selectedApp === "GooglePay") {
      if (isAndroid) {
        const gpayLink = `intent://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}#Intent;scheme=upi;package=com.google.android.apps.nbu.paisa.user;end`;
        window.location.href = gpayLink;
      } else if (isIOS) {
        // Open Google Pay UPI link for iOS (generic UPI link)
        const gpayUrl = `upi://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}`;
        window.location.href = gpayUrl;
      }
    } else if (selectedApp === "Paytm") {
      if (isAndroid) {
        const paytmLink = `intent://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}#Intent;scheme=paytm;package=com.paytm.app;end`;
        window.location.href = paytmLink;
      } else if (isIOS) {
        // Open a generic UPI link for Paytm on iOS
        const paytmUrl = `upi://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}`;
        window.location.href = paytmUrl;
      }
    }
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
