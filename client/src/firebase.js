// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-ce578.firebaseapp.com",
  projectId: "mern-project-ce578",
  storageBucket: "mern-project-ce578.appspot.com",
  messagingSenderId: "740155953226",
  appId: "1:740155953226:web:ed8d6b6986abfd5aa3d6b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);