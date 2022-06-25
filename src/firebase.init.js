// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  
  apiKey: "AIzaSyA7kBNeTlIP8-MjJycMrOdlkDw9ENMUP9Q",
  authDomain: "emajhon-sayeed.firebaseapp.com",
  projectId: "emajhon-sayeed",
  storageBucket: "emajhon-sayeed.appspot.com",
  messagingSenderId: "241095548900",
  appId: "1:241095548900:web:b9dffd31bb4aa2ec9271f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;