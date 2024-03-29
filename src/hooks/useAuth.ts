import { useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { auth } from '../libs/firebase';

// Custom hook for authentication
// using Firebase
const useAuth = () => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const register = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        await user.getIdToken().then((idToken) => {
          localStorage.setItem('idToken', idToken);
        });
      } else {
        localStorage.removeItem('idToken');
      }
      setIsLoading(false);
    });

    return unsubscribe;
  }, []);

  const isAuth = user !== null;

  return { user, isAuth, isLoading, register, login, logout };
};

export default useAuth;
