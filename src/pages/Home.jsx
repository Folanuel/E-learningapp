import {UserAuth} from "../context/AuthContext"
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";
import Courses from "../components/Courses";





export const Home = () => {

    const{ user } = UserAuth()
    return (
        <>        
        <div className="w-full h-full bg-white grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 ">
        <div className="my-auto pl-4 space-y-2">
            <h1 className="text-6xl font-bold space-y-2 pt-14">Learn Anytime and Anywhere on your device</h1>
            <p className="text-2xl font-semibold">The world is at the palm of your hands</p>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi aliquam atque ut sapiente! At quos reprehenderit, aperiam voluptas quisquam, debitis eos aliquam consequatur cupiditate eveniet eius. Sequi, soluta aut! Alias.</p>
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2015/01/08/18/24/children-593313_960_720.jpg" alt="children with laptop" />
        </div>
        <div>
            <img src="https://cdn.pixabay.com/photo/2017/08/01/00/38/man-2562325_960_720.jpg" alt="jotting with laptop" />
        </div>
        <div className="my-auto pl-4 space-y-2 bg-blue-400 text-white">
            <h1 className="text-4xl md:text-6xl font-bold space-y-2">Why use E-Learning?</h1>
            <ul className="text-xl md:text-2xl ">
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
                <li>Lorem ipsum dolor sit amet consectetur</li>
            </ul>
        </div>        
        </div>
        <div className="flex items-center justify-center">
            <h1 className="text-4xl font-semibold border-lg border-b-2 border-blue-500 my-16"> Popular Courses</h1>
        </div>
        <Courses />
        <div className="flex items-center justify-center">
            <h1 className="text-4xl font-semibold border-lg border-b-2 border-blue-500 my-16"> Our Pricing</h1>
        </div>
        <Pricing />
        <Testimonials />
        </>
        
    );
};