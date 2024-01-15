import { onAuthStateChanged } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user);
            console.log(user);
        });
    }, []);

    // Any component that is wrapped in the AuthenticationContextProvider 
    // will have access to the user object.
    return (
        <AuthenticationContext.Provider value={{user}}>
            {children}
        </AuthenticationContext.Provider>
    )
}