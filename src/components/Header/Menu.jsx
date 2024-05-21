import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { LuShoppingCart } from "react-icons/lu";
import { IoMdHeartEmpty } from "react-icons/io";

const Menu = () => {
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);

  const menuContent = [
    {
      text: "Home",
      url: "/",
    }, {
      text: "About",
      url: "/",
    }, {
      text: "Pricing",
      url: "/",
    }, {
      text: "Blog",
      url: "/",
    },
  ]

  const mobileToggleClick = () => {
    setMobileMenuToggle(!mobileMenuToggle)
  }

  return (
    <div>
      <ul className='flex items-center gap-12 font-semibold text-14'>
        <div className={`fixed top-0 ${mobileMenuToggle ? "left-0" : "-left-[75%]"}  bg-[#000000ce] text-white flex flex-col justify-center items-center text-4xl font-semibold h-full w-[75%] z-50 md:hidden duration-700`}>
          <ul>
            {
              menuContent.map((item, index) => {
                return (
                  <NavLink to="" key={index}><li className='flex items-center py-4 hover:text-my-pink duration-200'>{item.text}</li></NavLink>
                )
              })
            } 
          </ul>
        </div>
 
      </ul>

      <nav className='hidden md:flex'>
        <ul className='flex items-center gap-9 font-[400] text-lg'>
          {
            menuContent.map((item, index) => {
              return (
                <NavLink to="" key={index}><li className='flex items-center'>{item.text}</li></NavLink>
              )
            })
          }
          
        </ul>
      </nav>

      <div className='md:hidden flex fixed top-7 right-6 cursor-pointer z-50'>
        <span className='text-black' onClick={mobileToggleClick}>{mobileMenuToggle ? <IoClose size={"26px"} /> : <RxHamburgerMenu size={"26px"} />}</span>
      </div>
    </div>
  )
}

export default Menu