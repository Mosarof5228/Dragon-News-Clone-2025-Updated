import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile, } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null);
    console.log(user)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password)

    }

    const userProfileUpdate=(updatedData)=>{
        return updateProfile(auth.currentUser,updatedData)
    }

    const logOut=()=>{
        setLoading(true)
        return signOut(auth);
    }
    const authInfo={
        createUser,
        setUser,
        user,
        loginUser,
        logOut,
        setLoading,
        loading,
        userProfileUpdate
       
    }
  useEffect(()=>{
   const unsubscribe= onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser);
        setLoading(false)
    })
   return ()=>{
    unsubscribe();
   }
   
  },[])


    
   
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes={
    children:PropTypes.node,
}

export default AuthProvider;