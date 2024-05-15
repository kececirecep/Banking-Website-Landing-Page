import React from 'react'
import Logo from '../Header/Logo'
import { IoCallOutline } from "react-icons/io5";


const Footer = () => {
    return (
        <div>
            <div className='bg-[#EEEFFB] py-24 min-w-[390px]'>
                <div className="container grid grid-cols-1 md:grid-cols-5 justify-items-start py-4 px-4 md:px-0">
                    <div className='text-start md:block md:text-start flex flex-col items-start justify-start pb-4 pt-4'>
                        <Logo />
                        <p className='text-descColor pt-8 md:px-0 md:pr-8'>Learn To Love Growth And Change And You Will Be A Success. Microsoft Patch </p>
                    </div>
                    <div className=' pt-4 '>
                        <h2 className='text-titleColor font-semibold text-18'>Products</h2>
                        <ul className='text-14 font-medium text-descColor pt-4'>
                            <li className='py-2'>CSR Activities</li>
                            <li className='py-2'>Green Banking</li>
                            <li className='py-2'>News</li>
                            <li className='py-2'>Ongoing Campgain</li>
                            <li className='py-2'>Updates</li>
                        </ul>
                    </div>
                    <div className=' pt-4'>
                        <h2 className='text-titleColor font-semibold text-18'>Get Started</h2>
                        <ul className='text-14 font-medium text-descColor pt-4'>
                            <li className='py-2'>Career</li>
                            <li className='py-2'>Contact Us</li>
                            <li className='py-2'>Government Securities</li>
                            <li className='py-2'>Examples</li>
                            <li className='py-2'>NIS</li>
                        </ul>
                    </div>
                    <div className=' pt-4'>
                        <h2 className='text-titleColor font-semibold text-18'>About</h2>
                        <ul className='text-14 font-medium text-descColor pt-4'>
                            <li className='py-2'>IPDC at a Glance</li>
                            <li className='py-2'>Mission, VIsion & Values</li>
                            <li className='py-2'>Corporate Governanace</li>
                            <li className='py-2'>Shareholders</li>
                            <li className='py-2'>Investor Relations</li>
                        </ul>
                    </div>
                    <div className=''>
                        <span className='flex items-center text-themePink text-24 gap-2 pt-12 md:pt-0'><IoCallOutline /> <h6 className='text-titleColor text-18 font-semibold'>16519</h6></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer