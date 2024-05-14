import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'

const Header = () => {
    return (
        <div className='bg-transparent py-4  absolute w-full'>
            <div className="container flex items-center justify-between">
                <Logo />
                <Menu />
                <Search />
            </div>
        </div>
    )
}

export default Header