import React from 'react'
import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";

const Page1Content = (props) => {
  return (
    <div className='pb-16 py-5 px-15 flex items-center gap-10 h-[90vh]'>
        <ContentLeft />
        <ContentRight users={props.users}/>
    </div>
  )
}

export default Page1Content