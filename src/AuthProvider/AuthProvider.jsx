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
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  // CREATE USER //
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // LOGIN WITH EMAIL AND PASSWORD //

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   OBSERVER USER IS HE/SHE LOGIN OR NOT //

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  //   SIGN OUT USER //
  const signOutUser = () => {
    setUser(null);
    signOut(auth);
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
  };
  return (
    <div>
      <AuthContext.Provider value={allValues}>{children}</AuthContext.Provider>
    </div>
  );
}
