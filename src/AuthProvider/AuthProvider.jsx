import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // CREATE USER //
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // LOGIN WITH EMAIL AND PASSWORD //

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   OBSERVER USER IS HE/SHE LOGIN OR NOT //

  useEffect(() => {
    // onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     setUser(user);
    //   }
    //   setLoading(false);
    // });
    const unSubscribe = onAuthStateChanged(auth, (observerFunc) => {
      setUser(observerFunc);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  //   SIGN OUT USER //
  const signOutUser = () => {
    setUser(null);
    setLoading(true);
    return signOut(auth);
  };

  // -----SOCIAL LOGIN----- //

  // GOOGLE LOGIN //
  const googleLogin = () => {
    signInWithPopup(auth, googleProvider);
  };

  // GITHUB LOGIN //
  const githubLogin = () => {
    signInWithPopup(auth, githubProvider);
  };
  // UPDATE PROFILE //
  const updateYourProfile = (res, { displayName, photoURL }) => {
    updateProfile(res, { displayName, photoURL });
  };
  const allValues = {
    createUser,
    loginUser,
    signOutUser,
    googleLogin,
    githubLogin,
    updateYourProfile,
    user,
    loading,
  };
  return (
    <div>
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
    </div>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node,
};
