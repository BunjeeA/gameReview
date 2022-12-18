// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeTnrbYmXKjYEdoNct7b8n7mPebxmNKwE",
  authDomain: "gamereview-dae53.firebaseapp.com",
  projectId: "gamereview-dae53",
  storageBucket: "gamereview-dae53.appspot.com",
  messagingSenderId: "139118395034",
  appId: "1:139118395034:web:47f4c2b6c68d2e29966923"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)