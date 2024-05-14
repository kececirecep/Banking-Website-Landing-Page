import React from 'react'
import { IoArrowForward } from "react-icons/io5";

const OurServicesCard = (props) => {
    const iconStyle = {

    }
    return (
        <div className=''>
            <img src={props.img} className='w-full object-contain' alt={props.title} />
            <div className='flex items-center justify-between p-2'>
                <h2 className='uppercase text-titleColor text-22 font-semibold'>{props.title}</h2>
                <span className='text-themePink bg-lightPink rounded-full text-24 p-2'><IoArrowForward /></span>
            </div>
        </div>
    )
}

export default OurServicesCard