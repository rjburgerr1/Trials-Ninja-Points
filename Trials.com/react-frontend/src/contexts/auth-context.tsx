import { auth } from "../firebase";
import firebase from "firebase/app";
import React, { useContext, useState, useEffect } from "react";
const googleProvider = new firebase.auth.GoogleAuthProvider();

type ChildrenProps = {
    children: React.ReactNode;
};

const AuthContext = React.createContext<any>({} as any);
export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }: ChildrenProps) {
    const [currentUser, setCurrentUser] = useState<any>();
    const [loading, setLoading] = useState(true);

    const signup = async (
        email: string,
        password: string,
        username: string
    ) => {
        try {
            let user = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            if (user.user) {
                await user.user.updateProfile({ displayName: username });
            }
            return user;
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const login = async (email: string, password: string) => {
        const user = await auth.signInWithEmailAndPassword(email, password); // Firebase Auth
        return user;
    };

    const googleLogin = async () => {
        try {
            const response = await auth.signInWithPopup(googleProvider);

            return response.user;
        } catch (error: any) {
            console.log(error.message);
        }
    };

    const logout = () => {
        return auth.signOut();
    };

    const resetPassword = (email: string) => {
        return auth.sendPasswordResetEmail(email);
    };

    const updateEmail = (email: string) => {
        return currentUser.updateEmail(email);
    };

    const updatePassword = (password: string) => {
        return currentUser.updatePassword(password);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        login,
        googleLogin,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
