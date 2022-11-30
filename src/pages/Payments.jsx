import React from 'react'
import Pricing2 from '../components/Pricing2'


export const Payments = () => {
    return (
        <div className='w-full h-screen bg-cyan-400 flex flex-col'>
        <div className='flex'>
            <h1 className='text-5xl text-white border-b-4 border-cyan-600 pt-16 inline-block mx-auto'>Choose Your Plan </h1>
        </div>        
        <div className='pt-4'>
            <Pricing2 />
        </div>
        
        

        </div>
    )
}
