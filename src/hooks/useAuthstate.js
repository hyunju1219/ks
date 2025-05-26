import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useEffect, useState } from 'react';

function useAuthstate() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true); 
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            setUser(currentUser);
            setIsLoggedIn(true);
            console.log("로그인됨됨");
        } else {
            setUser(null);
            setIsLoggedIn(false);
            console.log("로그인안됨");
        }
        setAuthLoading(false); 
        });

        return () => unsubscribe();
    }, [auth]);

    return { isLoggedIn, user, authLoading }; 
    }

export default useAuthstate;