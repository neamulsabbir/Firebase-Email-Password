// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwIMKmbPvGkqvht-sbqw1QwpHq28_G8sE",
  authDomain: "fir-email-password-46ed6.firebaseapp.com",
  projectId: "fir-email-password-46ed6",
  storageBucket: "fir-email-password-46ed6.appspot.com",
  messagingSenderId: "107949504657",
  appId: "1:107949504657:web:610feede09728afd076730",
  measurementId: "G-1KZHZSL4WD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;