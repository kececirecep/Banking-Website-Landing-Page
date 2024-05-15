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
        <div className="flex flex-col-reverse md:flex-row md:h-screen w-full items-center justify-around min-w-[390px]">
            <div className='w-full h-full flex items-center justify-center p-4 pl-[58px]'>
                <div className=''>
                    <h2 className='text-63 font-black text-black'>Chase Your <br />Dream with us</h2>
                    <p className='text-16 font-medium text-descColor w-full md:w-[55%] py-12 text-center md:text-start'>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <div className='flex items-center gap-4 md:justify-start justify-center'>
                        <Button title="Apply Online" className="bg-themePink text-white text-12" />
                        <Button title="Loan Caclulator" className="bg-white text-themePink border border-themePink text-12" />
                    </div>
                    <div className='flex gap-4 items-center pt-24 justify-center md:justify-start'>
                        <span className='flex items-center text-themePink text-24 gap-2 border-r border-gray-500 pr-4'><IoCallOutline /> <h6 className='text-titleColor text-18 font-semibold'>16519</h6></span>
                        <div className='flex items-center md:justify-start justify-center gap-4'>
                            <FaFacebookF style={facebook} size="20px" />
                            <FaYoutube style={youtube} size="20px" />
                            <FaLinkedin style={linkedin} size="20px" />
                            <FaInstagram style={instagram} size="20px" />
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-lightPink flex w-full md:h-screen justify-center min-h-[500px]'>
                <img src="/images/hero.png" className='w-[350px] md:w-full object-contain min-h-[500px]' alt="" />
            </div>
        </div>
    )
}

export default Hero