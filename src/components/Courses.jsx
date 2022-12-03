import React from 'react'
import { data } from '../Data/data'
import Flower from '../assets/moroccan-flower.png'


const Courses = () => {
    const course = data

    return (
        <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4 px-12 pt-8'>
            {course.map((item, index) => (
                <div key={index}  className="border-lg border-2 hover:shadow-lg hover:shadow-[#040c16] hover:scale-105 group container rounded-md flex flex-col pl-4" style={{ 
        backgroundImage: `url(${Flower})` 
    }}>
                    <h1 className=''>{item.course}</h1>
                    <h1 className='text-2xl font-bold py-4'>{item.name}</h1>
                    <li className='pb-8'>{item.number}</li>
                    <span className='pl-[135px] font-semibold'>{item.language}</span>
                </div>
            ) )}
        </div>
    )
}

export default Courses