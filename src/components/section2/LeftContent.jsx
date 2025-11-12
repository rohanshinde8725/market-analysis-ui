import React from "react";

const LeftContent = () => {
  return (
    <div className="p-4 mt-8 h-[80vh] w-1/2 flex justify-between flex-col">
      <div>
        <h1 className="text-4xl font-bold leading-15">
          E-com market is expected <br /> to exceed{" "}
          <span className="bg-green-300 rounded-full p-2 text-4xl">$300B</span>{" "}
          in 2027
        </h1>
        <div className="flex">
          <i className="ri-flashlight-line text-3xl py-5"></i>
          <p className='text-lg py-5 px-2 font-sans'>in india MSME contribution to eTailing sales <br /> is expected to grow between 
            60-70% <br /> annually to reach USD50Bn by FY 2027
          </p>
        </div>
      </div>
      <div className='flex gap-10'>
        <div className='h-[220px] text-white w-[200px] rounded-4xl bg-blue-600 py-5 px-5'>
            <i className="ri-arrow-right-up-line text-6xl relative top-0 left-25 bg-white text-black rounded-full"></i>
            <h1 className='text-4xl font-bold mt-6'>26,7%</h1>
            <p className='text-sm'>Expected annual growth of eCom market size</p>
        </div>
        <div className='h-[220px] text-white w-[200px] rounded-4xl bg-green-500 py-5 px-5'>
            <i className="ri-arrow-right-up-line text-6xl relative top-0 left-25 bg-white text-black rounded-full"></i>
            <h1 className='text-4xl font-bold mt-6'>25%</h1>
            <p className='text-sm'>E-Com share of the orgnized retail in 2020</p>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
