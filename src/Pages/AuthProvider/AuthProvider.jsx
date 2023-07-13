import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';


export const AuthContext = createContext(null)
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(null)

    const createNewUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loginWithGoogle = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        setLoading(true)
        signOut(auth)
    }

    const updateUserProfile = (name,photo) =>{
       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
       }) }
        

   useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        setLoading(false)
       })
       return ()=>{
        return unsubscribe()
       }
   },[])

    const userInfo ={
        user,
        loading,
        createNewUser,
        userLogin,
        updateUserProfile,
        loginWithGoogle,
        logOut
    }

    return (
        <AuthContext.Provider value={userInfo}>
             {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;