import React from 'react'
import CounterBox from './CounterBox'

const Counter = () => {
    const counterData = [
        {
            counter: "57.6 bn",
            title: "LOAN PORTFOLIO",
            statusCounter: true
        }, {
            counter: "0.95%",
            title: "CLASSIFIED LOAN PORTFOLIO",
            statusCounter: false
        }, {
            counter: "388.5%",
            title: "CLASSIFIED LOAN Coverage",
            statusCounter: false
        }, {
            counter: "50.4 bn",
            title: "Deposit",
            statusCounter: false
        }, {
            counter: "6.1 bn",
            title: "Shareholders equity",
            statusCounter: false
        }, {
            counter: "18.51%",
            title: "Capital Adequacy Ratio",
            statusCounter: false
        }, {
            counter: "8.5 bn",
            title: "Market Capitalization",
            statusCounter: false
        }, {
            counter: "AAA",
            title: "Credit Rating",
            statusCounter: false
        }
    ]
    return (
        <div className='py-24 min-w-[390px]'>
            <div className='container'>
                <div className='flex justify-center flex-col items-center text-center pb-24'>
                    <h2 className='font-bold text-36 text-titleColor pb-8'>Our best results for the year</h2>
                    <p className='font-medium text-16 text-descColor w-[90%] md:w-[35%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam, dapibus mattis vel feugiat erat tortor eleifend.</p>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-center gap-0 md:gap-12 justify-items-center text-center'>
                    {
                        counterData.map((item, index) => {
                            return (
                                <div key={index}>
                                    <CounterBox counter={item.counter} title={item.title} status={item.statusCounter} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Counter