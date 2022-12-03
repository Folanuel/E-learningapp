import React from 'react'
import Pricing2 from '../components/Pricing2'
import Flower from '../assets/moroccan-flower.png'


export const Payments = () => {
    return (
        <div className='w-full h-full bg-white flex flex-col space-y-12' style={{ 
        backgroundImage: `url(${Flower})` 
    }}>
        
            <h1 className='text-3xl md:text-5xl text-black pt-16 inline-block mx-auto'>Find a Plan that fits you </h1>
            
            <Pricing2 />
        
        </div>
    )
}
