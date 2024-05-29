import { auth } from '../firebase'
import { onAuthStateChanged } from 'firebase/auth';
import React, {  createContext, useEffect, useState } from 'react'

export const AuthContext = createContext();

export const AuthContextProvider = ({children})=>{
    const [currentUser , setCurrentUser] = useState({});
    const [flagAdmin, setFlagAdmin] = useState(false)

    useEffect(()=>{
        const unsub = onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user)
        })

        return ()=>{
            unsub();
        }
    },[])

    
    return(
        <AuthContext.Provider value={{currentUser ,flagAdmin ,setFlagAdmin }} >
            {children}
        </AuthContext.Provider>
    )

}