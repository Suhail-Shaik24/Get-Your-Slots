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
      {/* Verification Code to be copied by the user */}
      <div className="verification-code flex gap-3 p-4 rounded-lg text-center items-center justify-center">
        <p className="font-bold text-lg text-red-600">Please include the code <span className="text-lg font-bold bg-blue-200 text-black rounded-lg p-2 mr-1 w-fit"> {verificationCode} </span>  in your UPI TRANSACTION NOTE </p>
        {/* <p className="text-lg font-bold bg-slate-300 rounded-lg p-3 w-fit">{verificationCode}</p> */}
      </div>
      <a href={upiUrl} target="_blank" className="font-bold text-white text-lg bg-[#2e358f] p-3 rounded"> Tap here to Pay</a>
      <p>or Scan the QR Code</p>
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
