import React, { createContext, useEffect, useState, useContext } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  User as FirebaseUser,
  GithubAuthProvider,
  GoogleAuthProvider
} from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import { CommonProps } from '../common/Interface/CommonProps';

interface AuthContextType {
  user: FirebaseUser | null;
  signIn: (email: string, password: string) => Promise<FirebaseUser>;
  logIn: (email: string, password: string) => Promise<FirebaseUser>;
  logInWithGoogle: () => Promise<FirebaseUser>;
  logInWithGithub: () => Promise<FirebaseUser>;
  logOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth(app);

const AuthProvider = ({ children }: CommonProps) => {
  const [user, setUser] = useState<FirebaseUser | null>(null);

  // Registar usuario
  const signIn = async (email: string, password: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  };

  // Iniciar sesión
  const logIn = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  };

  // Iniciar sesión con Github
  const logInWithGithub = async () => {
    const userCredential = await signInWithPopup(auth, githubProvider);
    return userCredential.user;
  };

  // Iniciar sesión con Google
  const logInWithGoogle = async () => {
    const userCredential = await signInWithPopup(auth, googleProvider);
    return userCredential.user;
  };

  // Cerrar sesión
  const logOut = async () => {
    await signOut(auth);
    setUser(null);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    signIn,
    logIn,
    logOut,
    logInWithGoogle,
    logInWithGithub,
  };

  return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
