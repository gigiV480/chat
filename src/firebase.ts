import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth"; // Optional

const firebaseConfig = {
  apiKey: "AIzaSyD_JhbbqQj3hyvdg3sacFsheaT3HEyw0PE",
  authDomain: "react-http-d3494.firebaseapp.com",
  databaseURL: "https://react-http-d3494-default-rtdb.firebaseio.com",
  projectId: "react-http-d3494",
  storageBucket: "react-http-d3494.appspot.com",
  messagingSenderId: "289164766852",
  appId: "1:289164766852:web:b135ba2137fb148b205cd1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
