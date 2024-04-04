
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore } from '@firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD2ya6Cgtlx9KMq6RrDrnFwO3HKwdI20IE",
  authDomain: "chatapp-a81f6.firebaseapp.com",
  projectId: "chatapp-a81f6",
  storageBucket: "chatapp-a81f6.appspot.com",
  messagingSenderId: "528306187115",
  appId: "1:528306187115:web:ff854379302680f1fc3a2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);