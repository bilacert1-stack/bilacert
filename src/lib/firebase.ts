import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCWfBq9WASW9TncDC3iK9om3dExev1AZpI",
  authDomain: "bilacert-malalang.firebaseapp.com",
  projectId: "bilacert-malalang",
  storageBucket: "bilacert-malalang.firebasestorage.app",
  messagingSenderId: "522620855614",
  appId: "1:522620855614:web:c52f6e494034e15e7c786f",
  measurementId: "G-6Q4YFS5D32"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
