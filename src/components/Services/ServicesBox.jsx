import React from 'react'

const ServicesBox = (props) => {
    return (
        <div>
            <img src={props.img} alt="" />
            <h3 className='text-22 text-titleColor font-bold py-4'>{props.title}</h3>
            <p className='text-14 text-descColor font-medium'>{props.desc}</p>
        </div>
    )
}

export default ServicesBox