import React from 'react'

const contentLeft = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between'>
      <div className='p-3'>
      <h1 className='text-5xl font-bold mb-8 leading-[1.2]'>
        prospective <br /> <span>customer</span> <br />
        segmentation
      </h1>
      <p className='text-lg text-gray-600'>Depending on customer satisfaction and access to banking products,
        potential target audience can be divided into three groups. 
      </p>
      </div>
      <div className='text-6xl'>
        <i className="ri-arrow-right-up-line"></i>
      </div>
    </div>
  )
}

export default contentLeft
