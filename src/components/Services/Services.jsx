import React from 'react'
import ServicesBox from './ServicesBox'

const Services = () => {
    const servicesBox = [
        {
            img: '/images/services/1.png',
            title: 'Integrity',
            desc: 'Displaying the highest level of Integrity in the way we conduct our business'
        }, {
            img: '/images/services/2.png',
            title: 'Integrity',
            desc: 'Displaying the highest level of Integrity in the way we conduct our business'
        }, {
            img: '/images/services/3.png',
            title: 'Integrity',
            desc: 'Displaying the highest level of Integrity in the way we conduct our business'
        }, {
            img: '/images/services/4.png',
            title: 'Integrity',
            desc: 'Displaying the highest level of Integrity in the way we conduct our business'
        }, {
            img: '/images/services/1.png',
            title: 'Integrity',
            desc: 'Displaying the highest level of Integrity in the way we conduct our business'
        }, {
            img: '/images/services/5.png',
            title: 'Integrity',
            desc: 'Displaying the highest level of Integrity in the way we conduct our business'
        }, {
            img: '/images/services/6.png',
            title: 'Integrity',
            desc: 'Displaying the highest level of Integrity in the way we conduct our business'
        }, {
            img: '/images/services/7.png',
            title: 'Integrity',
            desc: 'Displaying the highest level of Integrity in the way we conduct our business'
        },
    ]
    return (
        <div className='container flex flex-col justify-center items-center py-16'>
            <h2 className='text-36 font-bold text-titleColor pb-8'>Creating Extraordinary Customer Experience</h2>
            <p className='text-16 font-medium text-descColor text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Nullam bibendum eget morbi dignissim eu pharetra consequat montes, sagittis.</p>
            <div className='grid grid-cols-4 gap-12 pt-28'>
                {
                    servicesBox.map((item, index) => {
                        return (
                            <ServicesBox key={index} img={item.img} title={item.title} desc={item.desc} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Services