import React from 'react'
import Button from '../Button'

const Hero = () => {
    return (
        <div className=''>
            <div className="flex items-center justify-between">
                <div className='pl-48'>
                    <h2 className='text-63 font-black text-black'>Chase Your <br />Dream with us</h2>
                    <p className='text-16 font-medium text-descColor w-[55%] py-6'>The harder you work for something, the greater you’ll feel when you achieve it.</p>
                    <div className='flex items-center gap-4'>
                        <Button title="Apply Online" className="bg-themePink text-white text-12" />
                        <Button title="Loan Caclulator" className="bg-white text-themePink border border-themePink text-12" />
                    </div> 
                </div>
                <div className='bg-lightPink'>
                    <img src="/images/hero.png" className='w-full object-contain' alt="" />
                </div>


            </div>
        </div>
    )
}

export default Hero