import React from 'react'
import Button from '../Button'

const Newsletter = () => {
    return (
        <div className='bg-sectionBg py-24'>
            <div className='container'>
                <div className='flex justify-center flex-col items-center text-center pb-12'>
                    <h2 className='font-bold text-36 text-titleColor pb-8'>Newsletter</h2>
                    <p className='font-medium text-16 text-descColor w-[35%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis aliquam arcu lacus.</p>
                </div>
                <form className='flex items-center gap-4 justify-center'>
                    <input type="email" placeholder='Your email' className='px-6 py-3 w-80 outline-none border' />
                    <Button title="Subscribe" className="bg-themePink text-white text-12" />
                </form>
            </div>
        </div>
    )
}

export default Newsletter