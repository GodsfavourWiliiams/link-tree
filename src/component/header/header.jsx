import React, { useState } from "react";
import ProfileImg from '../assets/profile.svg';
import ShapeImg from '../assets/shape.svg';
import Dot from '../assets/dot.svg'; 


const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

 
  return (
    <div className="relative flex flex-col items-center justify-center mt-16">
      <img
        src={ProfileImg}
        className=""
        id="profile__img"
        alt=""
      />
      <p id="twitter" className="text-black my-2 font-bold text-[20px]">
        bolu_xy
      </p>
      <p id="slack" className="hidden">
        Bolu Omotayo
      </p>
      <div className="hidden sm:absolute -top-4 right-[20%] sm:flex items-center gap-3">
        {isHovering && (
          <p className="drop-shadow-linkShadow px-[12px] py-[8px] rounded-lg bg-black text-white text-xs font-semibold">
            Share link
          </p>
        )}
        <img
          src={ShapeImg}
          className="p-3 border rounded-full cursor-pointer border-dashed  border-[#D0D5DD]"
          alt=""
          onMouseOver={() => setIsHovering(true)}
          onMouseOut={() =>  setIsHovering(false)}
        />
      </div>
    </div>
  )
}

export default Header;