// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,

  // apiKey: "AIzaSyAJOdYY4ZQIA-cq2Pyt25NA30jPp6ML0pE",
  // authDomain: "blog-web-client-76705.firebaseapp.com",
  // projectId: "blog-web-client-76705",
  // storageBucket: "blog-web-client-76705.appspot.com",
  // messagingSenderId: "422307280562",
  // appId: "1:422307280562:web:2244ee90b977eaed9fbbab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;