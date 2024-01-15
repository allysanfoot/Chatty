import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyDsY1jQFagrLtdJDiJj3_Jua1NdDL2JBd8",
    authDomain: "chatty-3dd13.firebaseapp.com",
    projectId: "chatty-3dd13",
    storageBucket: "chatty-3dd13.appspot.com",
    messagingSenderId: "361489133189",
    appId: "1:361489133189:web:07900adc26a8e5692dc3ec"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);