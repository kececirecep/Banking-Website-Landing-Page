import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import Button from '../Button';


const Search = () => {
    const iconStyle = {
        color: "#ED017F",
    } 
    return (
        <div>
            <IoSearchOutline size="24px" style={iconStyle} />
            <Button  />
        </div>
    )
}

export default Search