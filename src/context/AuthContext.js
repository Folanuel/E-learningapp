import {useContext, createContext, useEffect, useState} from 'react'
import { 
    createUserWithEmailAndPassword,   
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup,
    signInWithRedirect,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import { auth } from "../firebase"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
        // signInWithRedirect(auth, provider)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)        
    }
    const emailSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)        
    }

    const logOut = () => {
        signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser)  => {
            setUser(currentUser);
            console.log("User", currentUser)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    return (
        <AuthContext.Provider value={{googleSignIn,createUser, emailSignIn, logOut, user}}>
            {children}
        </AuthContext.Provider>
    )
}


export const UserAuth = () => {
    return useContext(AuthContext)
}