import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <Link to={props.link} className={`px-6 py-4 font-semibold rounded uppercase ${props.className}`}>{props.title}</Link>

    )
}

export default Button