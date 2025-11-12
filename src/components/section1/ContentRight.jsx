import React from 'react'
import RightCard from "./RightCard"

const ContentRight = (props) => {
  return (
    <div id="right" className='h-full w-[80] flex flex-nowrap gap-5 overflow-x-auto'>
        {props.users.map(function(elem, idx){
            return <RightCard key={idx} id={idx} img={elem.img} intro={elem.intro} tag={elem.tag} color={elem.color}/>
        })}
    </div>
  )
}

export default ContentRight