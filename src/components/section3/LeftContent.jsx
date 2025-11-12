import React from "react";

const LeftContent = () => {
  return (
    <div className="h-[80vh] py-15 px-4 w-1/2  mt-8 flex justify-between flex-col">
      <h1 className="text-5xl font-bold ">The <span className="bg-green-400 rounded-full py-2 px-3 ">opportunity</span></h1>
      <div className="text-lg leading-8 font-serif">
        <p>
          Our deep experience in credit product, advanced proprietary payment
          and information technologies, and successful collaborations with XXX
          clients globally position us to succeed.
        </p>
        <br />
        <p>
          Combined with favorable market trends, we are confident in our ability
          to build a unique platform for SMEs in Lorem.
        </p>
      </div>
      <button className="bg-gray-300 w-35 px-2 rounded-full"><i className="ri-error-warning-line text-2xl flex items-start"></i></button>
    </div>
  );
};

export default LeftContent;
