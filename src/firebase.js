import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyCxnyzEHqasUyGmi_SMprUClbWLb2DUsOM",
    authDomain: "chatty-ef503.firebaseapp.com",
    projectId: "chatty-ef503",
    storageBucket: "chatty-ef503.appspot.com",
    messagingSenderId: "554971132605",
    appId: "1:554971132605:web:71f03cb844d661050dbdd4",
    measurementId: "G-4MHE5ET16Q"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
const analytics = getAnalytics(app);