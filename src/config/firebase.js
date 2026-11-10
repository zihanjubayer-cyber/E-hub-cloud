
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAXWaDpkKXF_6C5TouCZuxrmWT3gjaQtT8",
  authDomain: "e-hub-cloud.firebaseapp.com",
  projectId: "e-hub-cloud",
  storageBucket: "e-hub-cloud.firebasestorage.app",
  messagingSenderId: "1051474231450",
  appId: "1:1051474231450:web:8a3ef037420440ee925f23",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
