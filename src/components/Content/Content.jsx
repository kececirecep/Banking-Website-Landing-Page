import React from 'react'

const Content = () => {
    return (
        <div className='grid grid-cols-3 items-center min-w-[390px]'>
            <div className='hidden xl:block'>
                <img src="/images/content.png" className='w-[640px] object-cover' alt="" />
            </div>
            <div className='xl:col-span-2 col-span-3 xl:w-[75%] w-full p-12 lg:p-28'>
                <h2 className='font-bold text-titleColor text-32 pb-8'>IPDC AT A GLANCE</h2>
                <p className='font-medium text-descColor text-16'>IPDC Finance Limited (previously known as "Industrial Promotion and Development Company of Bangladesh Limited") is the first private sector financial institution of the country established in 1981 by a distinguished group of shareholders namely International Finance Corporation (IFC), USA, German Investment and Development Company (DEG), Germany, The Aga Khan Fund for Economic Development (AKFED), Switzerland, Commonwealth Development Corporation (CDC), UK and the Government of Bangladesh</p>
            </div>
        </div>
    )
}

export default Content