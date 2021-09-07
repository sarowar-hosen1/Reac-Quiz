import React, { useContext, useEffect, useState } from "react";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth"



const AuthContext = React.createContext();

export const useAuth = () => { return useContext(AuthContext) }


export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState("");

    useEffect(() => {
        const auth = getAuth();
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        })
        return unsuscribe;
    })

    //signup fucntion
    async function signup(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        //update profile
        await updateProfile(auth.currentUser, {
            displayName: username,
        })

        const user = auth.currentUser();
        setCurrentUser({
            ...user,
        })
    }

    //signin function
    async function signin(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);

    }

    //signout 
    function logout() {
        const auth = getAuth();
        return signOut(auth)
    }
    const value = {
        signup,
        signin,
        logout
    }

    return (
        <AuthContext.Provider value={value} >
            {!loading && children}
        </AuthContext.Provider>
    )
}