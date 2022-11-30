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
                className="pb-12 mt-0 pt-0"
                >
                <div className="space-y-1 font-medium dark:text-white">
                    <div>
                    Jese Leos
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                    Joined in August 2014
                    </div>
                </div>
                </Avatar>
                Slide 1
                </div>
                <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white rounded-l-none rounded-r-none">
                Slide 2
                </div>
                <div className="flex h-full items-center justify-center bg-white dark:bg-gray-700 dark:text-white rounded-l-none rounded-r-none">
                Slide 3
                </div>
            </Carousel>
        </div>
        </div>
    )
}

export default Testimonials