import React from 'react'
import Button from '../Button'
import { IoCallOutline } from "react-icons/io5";
import { FaLinkedin, FaYoutube, FaFacebookF, FaInstagram } from "react-icons/fa";

const Hero = () => {
    const facebook = {
        color: "#4B7FCD"
    }
    const youtube = {
        color: "#FF0000"
    }
    const linkedin = {
        color: "#4061D8"
    }
    const instagram = {
        color: "#E10179"
    }
    return (
        <div className=''>
            <div className="flex items-center justify-between">
                <div className='pl-48'>
                    <h2 className='text-63 font-black text-black'>Chase Your <br />Dream with us</h2>
                    <p className='text-16 font-medium text-descColor w-[55%] py-12'>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <div className='flex items-center gap-4'>
                        <Button title="Apply Online" className="bg-themePink text-white text-12" />
                        <Button title="Loan Caclulator" className="bg-white text-themePink border border-themePink text-12" />
                    </div>
                    <div className='flex gap-12 items-center pt-24'>
                        <span className='flex items-center text-themePink text-24 gap-2 border-r border-gray-500 pr-4'><IoCallOutline /> <h6 className='text-titleColor text-18 font-semibold'>16519</h6></span>
                        <div className='flex items-center gap-4'>
                            <FaFacebookF style={facebook} size="20px" />
                            <FaYoutube style={youtube} size="20px" />
                            <FaLinkedin style={linkedin} size="20px" />
                            <FaInstagram style={instagram} size="20px" />
                        </div>
                    </div>
                </div>
                <div className='bg-lightPink h-screen flex items-center'>
                    <img src="/images/hero.png" className='w-full object-contain' alt="" />
                </div>


            </div>
        </div>
    )
}

export default Hero