// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqR5n1QTd6YsUrsH_3wiQ3-RuaVPsKwsI",
  authDomain: "react-portfolio-dashboar-82ffa.firebaseapp.com",
  projectId: "react-portfolio-dashboar-82ffa",
  storageBucket: "react-portfolio-dashboar-82ffa.appspot.com",
  messagingSenderId: "970278803093",
  appId: "1:970278803093:web:896c851143aedd42bf6d9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);