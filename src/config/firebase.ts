// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6Y_vbxgJfbD0rp07AuJuKE4qBWXkmXbk",
  authDomain: "rtu-qms-bdb22.firebaseapp.com",
  databaseURL: "https://rtu-qms-bdb22-default-rtdb.firebaseio.com",
  projectId: "rtu-qms-bdb22",
  storageBucket: "rtu-qms-bdb22.appspot.com",
  messagingSenderId: "357557847982",
  appId: "1:357557847982:web:2d89a573361b241b5bea3f",
  measurementId: "G-LTMCH7H3N7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getDatabase(app);

export default app;