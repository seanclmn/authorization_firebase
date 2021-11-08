// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import { getFirestore } from 'firebase/firestore';
import 'firebase/storage'
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkwaZiSW8LxW-0kODvTxRSB3YzEL1wYwI",
  authDomain: "fir-practice-85948.firebaseapp.com",
  projectId: "fir-practice-85948",
  storageBucket: "fir-practice-85948.appspot.com",
  messagingSenderId: "77523700392",
  appId: "1:77523700392:web:033684b4b7f0220d93509d"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export default getFirestore();