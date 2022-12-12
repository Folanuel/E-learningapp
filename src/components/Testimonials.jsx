import React from 'react'
import { Carousel, Avatar } from 'flowbite-react'


const Testimonials = () => {
    return (
        <div>
        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel>
                <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white flex-col">
                <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
                size="lg"
                className="pb-12 mt-0 pt-12 md:pt-0"
                >
                <div className="space-y-1 font-medium dark:text-white">
                    <div>
                    Jese Leos
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                    Using E-learning since August 2021
                    </div>
                </div>
                </Avatar>
                <p className='text-center whitespace-normal px-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum velit voluptates qui aliquam illum maxime vero perspiciatis id harum facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis commodi omnis adipisci repellendus? Beatae magnam at aut dignissimos esse?</p>
                </div>
                <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white flex-col">
                <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
                size="lg"
                className="pb-12 mt-0 pt-12 md:pt-0"
                >
                <div className="space-y-1 font-medium dark:text-white">
                    <div>
                    John Doe
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                    Using E-learning since January 2019
                    </div>
                </div>
                </Avatar>
                <p className='text-center whitespace-normal px-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum velit voluptates qui aliquam illum maxime vero perspiciatis id harum facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis commodi omnis adipisci repellendus? Beatae magnam at aut dignissimos esse?</p>
                </div>
                <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white flex-col">
                <Avatar
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded={true}
                size="lg"
                className="pb-12 mt-0 pt-12 md:pt-0"
                >
                <div className="space-y-1 font-medium dark:text-white">
                    <div>
                    Tammy Tomi
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                    Using E-learning since June 2020
                    </div>
                </div>
                </Avatar>
                <p className='text-center whitespace-normal px-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum velit voluptates qui aliquam illum maxime vero perspiciatis id harum facilis Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nobis commodi omnis adipisci repellendus? Beatae magnam at aut dignissimos esse?</p>
                </div>
            </Carousel>
        </div>
        </div>
    )
}

export default Testimonials