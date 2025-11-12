import React from "react";

const RightCard = (props) => {
  return (
    <div className="h-full w-70 bg-red-500 rounded-3xl overflow-hidden shrink-0 relative">
      <img className="h-full w-full object-cover" src={props.img} alt="" />
      <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between">
        <h1 className="bg-white h-10 w-10 rounded-full flex justify-center items-center text-2xl">
          {props.id + 1}
        </h1>
        <div>
          <p className="text-lg leading-relaxed mb-14 text-white">
            {props.intro}
          </p>
          <div className="flex justify-between">
            <button style={{background:props.color}} className="text-white px-8 py-2 rounded-full cursor-pointer">
              {props.tag}
            </button>
            <button className="bg-blue-600 text-white px-3 py-2 rounded-full cursor-pointer">
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightCard;
