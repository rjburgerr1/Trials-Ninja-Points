import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

type ChildrenProps = {
  children: React.ReactNode;
};

const defaultUser = {
  currentUser: { email: "", displayName: "", uid: "" },
  signup: (email: string, password: string) => {},
  login: (email: string, password: string) => {},
  resetPassword: (email: string) => {},
  logout: () => {},
  updateEmail: (email: string) => {},
  updatePassword: (password: string) => {},
};

const AuthContext = React.createContext(defaultUser);
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: ChildrenProps) {
  const [currentUser, setCurrentUser] = useState<any>();
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  function login(email: string, password: string) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function logout() {
    return auth.signOut();
  }

  function resetPassword(email: string) {
    return auth.sendPasswordResetEmail(email);
  }

  function updateEmail(email: string) {
    return currentUser.updateEmail(email);
  }

  function updatePassword(password: string) {
    return currentUser.updatePassword(password);
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
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
