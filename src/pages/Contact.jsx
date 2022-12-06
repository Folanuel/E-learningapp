import React from 'react'

const Contact = () => {
    return (
        <div className='w-full h-full grid grid-cols-1 md:grid-cols-2 pb-3'>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg" alt="children with laptop" />
        </div>
        <div className='pt-[5rem] pl-4 bg-white text-black'>
            <form  method="POST" className='flex flex-col pr-12 space-y-3'>
                <label htmlFor="name" className='pl-3 font-bold'>Full Name</label>
                <input className='border-t-0 border-r-0 border-l-0 border-lg border-b-2 border-b-black' name="name" placeholder="Enter full name..." type="text" />
                <label htmlFor="email" className='pl-3 font-bold'>Email</label>
                <input className='border-t-0 border-r-0 border-l-0 border-lg border-b-2 border-b-black' name="email" placeholder="Enter email..." type="email" />
                <label htmlFor="message" className='pl-3 font-bold'>Message</label>
                <textarea
                    className='border-t-0 border-r-0 border-l-0 border-lg border-b-2 border-b-black'
                    rows="3"
                    placeholder="Enter message..."
                    name="message"
                    required
                ></textarea>
                <button type="submit" className='bg-blue-400 text-white font-semibold mx-auto p-2 rounded hover:text-blue-900 '> Send Message</button>
            </form>
        </div>        
        </div>
    )
}

export default Contact