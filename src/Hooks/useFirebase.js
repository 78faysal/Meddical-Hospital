import React, {useState, useEffect} from 'react';
import initializeAuthentication from './Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, FacebookAuthProvider } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState([]);

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();

    // signing in using google account 
    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                
            })
    }


    // sign in using facebook 
    const signInUsingFacebook = () =>{
        signInWithPopup(auth, facebookProvider)
            .then(result => {
                console.log(result.user);
            })
    }

    

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }
        })
    }, [])



    return {
        signInUsingGoogle,
        user,
        logOut,
        signInUsingFacebook
    }
    
};

export default useFirebase;