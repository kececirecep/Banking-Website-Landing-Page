import React from 'react'
import Logo from './Logo'
import Menu from './Menu' 

const Header = () => {
    return (
        <div className='bg-transparent py-4 absolute w-full'>
            <div className="container flex items-center justify-between">
                <Logo />
                <Menu /> 
            </div>
        </div>
    )
}

export default Header