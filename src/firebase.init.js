// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC6jkQso411AVMOZHccx-Pibxr30knc1Eo",
    authDomain: "intelligent-car-services.firebaseapp.com",
    projectId: "intelligent-car-services",
    storageBucket: "intelligent-car-services.appspot.com",
    messagingSenderId: "597173488256",
    appId: "1:597173488256:web:927e89d90ad88e23b4b465"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

