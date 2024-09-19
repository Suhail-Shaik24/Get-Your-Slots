import React from "react";
import { QRCodeSVG } from "qrcode.react";

const QRFreshersRealTime = () => {
  const UPI_ID = "chaitusane777-1@okicici";
  const NAME = "Chaitu%20Sane";
  const amount = "899";
  const Transaction_Message = "FresherVisa_RealTimeAlerts_Fee";

  const upiUrl = `upi://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR&tn=${Transaction_Message}`;

  return (
    <div className="border-2 border-[#a3663c] w-full p-4 rounded-lg flex flex-col gap-3 justify-center items-center bg-gray-100 shadow-lg">
      <h2 className="text-xl font-bold font-['Open_Sans']font-semibold mb-2 text-center">Proceed to Pay <br /> <span className="text-4xl"> ₹{amount} </span></h2>
      <a href={upiUrl} target="_blank" className="font-bold text-white text-lg bg-[#2e358f] p-3 rounded"> Tap here to Pay</a>
      <p>or Scan the QR Code</p>
      <QRCodeSVG value={upiUrl} size={256} />
      <div className="transactionID flex flex-col gap-2">
        <label className='text-base text-left lg:text-lg font-semibold'>Enter Transaction ID:  </label>
        <input
          className='border-2 border-[#a3663c] rounded-lg lg:w-96 p-3 h-10'
          type="text"
          name='LastName'
          // value={formData.LastName}
          // onChange={handleInputChange}
          placeholder='Transaction ID'
          required />
      </div>
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
