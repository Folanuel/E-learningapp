import { GoogleButton } from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Label, Button, TextInput,Checkbox } from "flowbite-react"
import Flower from "../assets/moroccan-flower.png"

export const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const {googleSignIn, createUser, user} = UserAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/login")
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try{
            await createUser(email, password)

        } catch(e) {
            setError(e.message)
            console.log(e.message)
        }
    }
    
    
    const SignUpWithGoogle = async () => {
        try {
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }        
    };

    useEffect(() => {
        if(user != null) {
            navigate("/")
        }
    }, [user])

    return (
        <div className="w-full h-full flex flex-col space-y-12 justify-center items-center pt-16 pb-12" style={{ 
        backgroundImage: `url(${Flower})` 
    }}>
        <h1 className="text-2xl font-bold">Sign up to use E-learning</h1>
        <p>Already have an account? <span onClick={handleClick} className="hover:cursor-pointer hover:underline hover:underline-offset-4 text-blue-900 font-bold">Sign In</span></p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-[30%]">
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="email1"
                        value="Email Address"
                    />
                    </div>
                    <TextInput
                    onChange={(e) => setEmail(e.target.value)}
                    id="email1"
                    type="email"
                    placeholder="type your email"
                    required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="password1"
                        value="Password"
                    />
                    </div>
                    <TextInput
                    onChange={(e) => setPassword(e.target.value)}
                    id="password1"
                    type="password"
                    placeholder="password"
                    required={true}
                    />
                </div>
                <div className="flex items-center gap-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember">
                Remember me
                </Label>
                </div>
                <Button type="submit">
                SignUp
                </Button>
            </form>
            <GoogleButton onClick={SignUpWithGoogle} label="Sign up with Google" className="w-[40%]"/>        
        </div>
    );
};
