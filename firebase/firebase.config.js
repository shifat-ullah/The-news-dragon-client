// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOaLlCoFlECW_07fKKbuZrC2uFVnZ6iCw",
  authDomain: "the-news-dragon-24de6.firebaseapp.com",
  projectId: "the-news-dragon-24de6",
  storageBucket: "the-news-dragon-24de6.appspot.com",
  messagingSenderId: "961090517158",
  appId: "1:961090517158:web:1a9ac527da499f9c635c67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;