import React from 'react'

const RightContent = () => {
  return (
    <div className='h-[80vh] w-1/2 mt-8 relative flex justify-between '>
        <img className='object-cover w-full rounded-3xl' src="/img/mountain.jpg" alt="mountain-img" />
        <div className='absolute top-10 right-10 h-[180px] w-[180px] bg-green-400 rounded-3xl flex flex-col py-8'>
            <i className='ri-shopping-cart-line text-5xl flex justify-center'></i>
            <p className='text-base mt-4 px-5'>Trends of moving from retail to e-Tail</p>
        </div>
        <div className='absolute text-white bottom-10 left-10 h-[180px] w-[180px] bg-blue-600 rounded-3xl flex flex-col py-8'>
            <i className="ri-numbers-line text-5xl flex justify-center"></i>
            <p className='text-base mt-4 px-5'>Fast-growing market segment</p>
        </div>
    </div>
  )
}

export default RightContent