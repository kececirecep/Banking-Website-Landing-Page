import React from 'react'
import Logo from './Logo'
import Menu from './Menu'
import Search from './Search'

const Header = () => {
    return (
        <div className='container flex items-center justify-between py-12'>
            <Logo />
            <Menu />
            <Search/>
        </div>
    )
}

export default Header