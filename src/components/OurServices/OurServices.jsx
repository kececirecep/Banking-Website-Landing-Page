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
            title: "IPDC auto loan"
        },
    ]
    return (
        <div className='bg-sectionBg py-24'>
            <div className='container'>
                <div className='text-center pb-24'>
                    <h2 className='font-bold text-36 text-titleColor pb-8'>Our Services</h2>
                    <p className='font-medium text-16 text-descColor'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
                </div>
                <div className='grid grid-cols-4 gap-12'>
                    {
                        OurServicesData.map((item, index) => {
                            return (
                                <div key={index}>
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