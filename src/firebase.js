// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup,
    signInWithRedirect
} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCkuIMN-jotNHB-yiZxfrPHfXmSRBZmwGQ",
    authDomain: "auth-f0faf.firebaseapp.com",
    projectId: "auth-f0faf",
    storageBucket: "auth-f0faf.appspot.com",
    messagingSenderId: "193237118293",
    appId: "1:193237118293:web:09a51714fa41dd596953dc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

