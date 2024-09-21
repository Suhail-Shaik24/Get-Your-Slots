import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRFreshersRealTime = ({ amount, verificationCode }) => {
  const UPI_ID = "khajaaqib5@okhdfcbank";
  const NAME = "Khaja%20Aaqib";
  // const amount = "899";
  // const Transaction_Message = {verificationCode};

  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${verificationCode}`;

  return (
    <div className="border-2 border-[#a3663c] w-full p-4 rounded-lg flex flex-col gap-3 justify-center items-center bg-gray-100 shadow-lg">
      <h2 className="text-xl font-bold font-['Open_Sans']font-semibold mb-2 text-center">Proceed to Pay <br /> <span className="text-4xl"> ₹{amount} </span></h2>
      <a href={upiUrl} target="_blank" className="font-bold text-white text-lg bg-[#2e358f] p-3 rounded lg:hidden"> Tap here to Pay</a>
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
