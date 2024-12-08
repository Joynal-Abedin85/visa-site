import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut  } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from './firebase.init';

export const Authcontext = createContext()

const Authprovider = ({children}) => {

    const [user,setuser] = useState(null)
    const [loading , setloading] = useState(true)

    const createuser = (email,password)=> {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const signinuser = (email,password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = ()=> {
        setloading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (cuser)=>{
            setuser(cuser)
            setloading(false)
        });
        return () => {
            unsub
        }
    },[])

    const userinfo = {
        user,
        loading,
        createuser,
        signinuser,
        setuser,
        logout
    }
    return (
        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;