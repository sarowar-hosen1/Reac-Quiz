import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import {
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []); 

    //create user
    async function signup(email, password, name) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        //update username 
        await updateProfile(auth.currentUser, {
            displayName: name,
        })

        //setuse
        const user = auth.currentUser;
        setCurrentUser(user);
    }

    //sign in user
    function signin(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password)
    }

    //logout 
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        loading,
        signup,
        signin,
        logout
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}