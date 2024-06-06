// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1uq09k_J7D0Ajg-sIg6TzLTkAUkiOXKk",
    authDomain: "haven-wheels.firebaseapp.com",
    projectId: "haven-wheels",
    storageBucket: "haven-wheels.appspot.com",
    messagingSenderId: "570378453289",
    appId: "1:570378453289:web:d7f95dc91b9df1bb2ab738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;