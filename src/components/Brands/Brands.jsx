import React from 'react'

const Brands = () => {
    const brandsImg = [
        {
            img: "/images/brands/1.png"
        }, {
            img: "/images/brands/2.png"
        }, {
            img: "/images/brands/3.png"
        }, {
            img: "/images/brands/4.png"
        },
    ]
    return (
        <div className='bg-sectionBg py-16'>
            <div className="container">
                <h2 className='text-24 font-medium text-titleColor uppercase text-center py-14 pb-24'>Business Partners</h2>
                <div className='grid grid-cols-4 justify-items-center'>
                    {
                        brandsImg.map((item, index) => {
                            return (
                                <div key={index}>
                                    <img src={item.img} className='w-[185px] h[110px] object-contain' alt="" />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Brands