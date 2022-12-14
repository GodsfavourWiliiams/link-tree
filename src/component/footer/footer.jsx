import React from 'react'
import ZuriImg from "../assets/zuri.svg";
import IngresiveIng from "../assets/ingressive.svg"

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between justify-start gap-[16px] items-start md:items-center max-w-7xl mx-auto border-0 border-t border-gray-300 py-6 mt-[64px]'>
        <img src={ZuriImg} alt="" />
        <p className="text-[16px] text-[#667085]">HNG Internship 9 Frontend Task</p>
        <img src={IngresiveIng} alt="" />
    </div>
  )
}

export default Footer;