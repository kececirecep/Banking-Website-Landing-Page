import React from 'react'
import OurServicesCard from './OurServicesCard'

const OurServices = () => {
    const OurServicesData = [
        {
            img: "/images/our-services/1.png",
            title: "IPDC SAVING SCHEMES"
        }, {
            img: "/images/our-services/2.png",
            title: "IPDC Personal loan"
        }, {
            img: "/images/our-services/3.png",
            title: "IPDC Deposit schemes"
        }, {
            img: "/images/our-services/4.png",
            title: "IPDC auto SCHEMES"
        },
    ]
    return (
        <div className='bg-sectionBg py-24 min-w-[390px]'>
            <div className='container'>
                <div className='text-center pb-24'>
                    <h2 className='font-bold text-36 text-titleColor pb-8'>Our Services</h2>
                    <p className='font-medium text-16 text-descColor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 justify-items-center md:justify-items-start'>
                    {
                        OurServicesData.map((item, index) => {
                            return (
                                <div key={index} className='w-[300px] md:w-full'>
                                    <OurServicesCard img={item.img} title={item.title} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default OurServices