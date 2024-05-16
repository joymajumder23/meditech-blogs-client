import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // create user
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

     // update user 
     const updateUser = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          });
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log(currentUser);
            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email: userEmail};
            setUser(currentUser);
            setLoading(false);

            if(currentUser){
                
                axios.post('https://blog-web-server-omega.vercel.app/jwt', loggedUser, {withCredentials: true})
                .then(res => {
                    // console.log('Token', res.data);
                })
            }
            else{
                axios.post('https://blog-web-server-omega.vercel.app/logout', loggedUser, {withCredentials: true})
                .then(res => {
                    // console.log(res.data);
                })
            }
        });
        return () => {
            unSubscribe();
        }
    },[]);

    // logout
    const logOutUser = () => {
        return signOut(auth);
    }

    const authInfo = {user, createUser, updateUser, loginUser, logOutUser, loading, googleLogin, githubLogin};
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;