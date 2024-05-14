import React from 'react'

const CounterBox = (props) => {
    return (
        <div className=''>
            <h2 className={`text-40 font-bold ${props.status ? "text-themePink" : "text-titleColor"}`}>{props.counter}</h2>
            <h6 className='text-16 font-medium text-descColor'>{props.title}</h6>
        </div>
    )
}

export default CounterBox