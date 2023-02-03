// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAQHD4ctovblQzagf5QRZuzkHPxyZK8jdw",
  authDomain: "contexto-993af.firebaseapp.com",
  projectId: "contexto-993af",
  storageBucket: "contexto-993af.appspot.com",
  messagingSenderId: "1057638414791",
  appId: "1:1057638414791:web:83659c71a3a5afdbf801e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 