import { useEffect, useState } from "react";
import firebaseInitialize from "../Firebase/firebase.init";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";
firebaseInitialize();

const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoad] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

  const ClearError = () => {
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  // clear error
  useEffect(() => {
    ClearError();
  }, [error]);

  //google sign in
  const signInWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

 

  //signInWithEmailAndPassword
  const signInWithEmail = () => {
   return signInWithEmailAndPassword(auth, email, password)
  };

  // sign out
  const logOut = () => {
    signOut(auth)
      .then((result) => {
        setUser({});
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // get currently signed in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      setLoad(false)
    });
    return () => unsubscribe;
  }, [user]);

  // get name
  const getName = (e) => {
    setName(e?.target?.value);
  };
  // get email
  const getEmail = (e) => {
    setEmail(e?.target?.value);
  };
  // get password
  const getPassword = (e) => {
    setPassword(e?.target?.value);
  };
  // get password
  const getPhotoURL = (e) => {
    setPhotoURL(e?.target?.value);
  };

  // signUp
  const signUpWithEmail = () => {
   
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update name and email
  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    }).then((result) => {});
  };

  // sendVilifiedEmail
  function sendVilifiedEmail() {
    sendEmailVerification(auth.currentUser).then((result) => {
      alert(
        `Please verify your email, a verification email has been sent to ${email}`
      );
    });
  }

  return {
    sendVilifiedEmail,
    setUserName,
    sendEmailVerification,
    signInWithGoogle,
    user,
    setUser,
    error,
    auth,
    setError,
    logOut,
    getEmail,
    getPassword,
    signUpWithEmail,
    signInWithEmail,
    getName,
    getPhotoURL,
    loading
    
  };
};

export default useFirebase;