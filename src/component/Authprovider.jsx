import { createUserWithEmailAndPassword, signInWithEmailAndPassword,  } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from './firebase.init';

export const Authcontext = createContext()

const Authprovider = ({children}) => {

    const [user,setuser] = useState(null)
    const [loading , setloading] = useState(true)

    const createuser = (email,password)=> {
        return createUserWithEmailAndPassword(auth, email,password)
    }

    const signinuser = (email,password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userinfo = {
        user,
        loading,
        createuser,
        signinuser
    }
    return (
        <Authcontext.Provider value={userinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;