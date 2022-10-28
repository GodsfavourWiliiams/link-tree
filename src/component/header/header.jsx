import React, { useState } from "react";
import ProfileImg from '../assets/profile.svg';
import ShapeImg from '../assets/shape.svg';
import Dot from '../assets/dot.svg'; 


const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

 
  return (
    <div className="relative flex flex-col items-center justify-center max-w-3xl mx-auto mt-16">
      <img
        src={ProfileImg}
        className=""
        id="profile__img"
        alt=""
      />
      <p id="twitter" className="text-black my-2 font-bold text-[20px]">
        Godsfavour_sw
      </p>
      <p id="slack" className="hidden">
        a_boy_ha_no_name
      </p>
      <div className="absolute -top-4 right-0 sm:right-[10px] sm:flex items-center gap-3">
        {isHovering && (
          <p className="absolute top-[60px] right-1 sm:right-0 px-[12px] py-[8px] rounded-lg bg-black text-white text-xs font-semibold">
            Share
          </p>
        )}
        <div className="hidden sm:block">
           <img
            src={ShapeImg}
            className="p-3 border rounded-full cursor-pointer border-dashed  border-[#D0D5DD]"
            alt=""
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() =>  setIsHovering(false)}
          />
        </div>
       
        <div className="block sm:hidden w-[44px] relative h-[44px] border rounded-full cursor-pointer border-dashed border-[#D0D5DD]">
          <img
            src={Dot}
            className="absolute top-[45%] left-[13px]"
            alt=""
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() =>  setIsHovering(false)}
          />
        </div>
     

      </div>
    </div>
  )
}

export default Header;