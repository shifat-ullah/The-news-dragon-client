import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';

export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProviders = ({children}) => {

    const [users,setUsers]=useState(null)
    const [loader, setLoader]=useState(true)

    const createUser = (email,password)=>{
        setLoader(true)
      return  createUserWithEmailAndPassword(auth, email, password)
      
    };

    const loginUser = (email,password)=>{
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut=()=>{
        setLoader(true)
        return signOut(auth)
    }

    useEffect(()=>{
      const uncibscribe=  onAuthStateChanged(auth, logedUser =>{
            console.log('loged user', logedUser)
            setUsers(logedUser);
            setLoader(false)
        })

        return ()=>{
            uncibscribe()
        }
    },[])

    const AuthInfo ={
        users,
        loader,
        createUser,
        loginUser,
        logOut,
    }
    return (
       <AuthContext.Provider value={AuthInfo}>
            {children}
       </AuthContext.Provider>
    );
};

export default AuthProviders;