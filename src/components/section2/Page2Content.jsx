import React from 'react'
import LeftContent from "./LeftContent";
import RightContent from "./RightContent";
const Page2Content = () => {
  return (
    <div className='pb-16 py-5 px-15 flex items-center h-[90vh] gap-10'>
        <LeftContent />
        <RightContent />
    </div>
  )
}

export default Page2Content