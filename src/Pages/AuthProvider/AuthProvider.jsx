import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from '../../Firebase/firebase.config';
import axios from 'axios';


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider();

    const createNewUser = (email,password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const userLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const loginWithGoogle = () =>{
        setLoading(true)
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
       if(currentUser){
        axios.post('https://body-build-gym-server-eikjp07vk-mehedihasan42.vercel.app/jwt', {email:currentUser.email})
        .then(data=>
        localStorage.setItem('access-token',data.data.token)
        )
        setLoading(false)
       }
       else{
        localStorage.removeItem('access-token')
        setLoading(false)
       }
       
       
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