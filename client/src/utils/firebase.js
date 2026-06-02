
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
   apiKey: "AIzaSyAaXsPWuyiJq-qBcDxNybnp7Zu08qvlYEU",
  authDomain: "aiexam-de5a4.firebaseapp.com",
  projectId: "aiexam-de5a4",
  storageBucket: "aiexam-de5a4.firebasestorage.app",
  messagingSenderId: "1077417910433",
  appId: "1:1077417910433:web:d179657e6429534a4d50e0",
  measurementId: "G-G0ZLTVVCPZ"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}