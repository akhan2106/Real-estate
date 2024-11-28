import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyCMGN1BGqXNUbkEwi8ug3H4xPX0yq1XI_8",
  authDomain: "akkk-40234.firebaseapp.com",
  projectId: "akkk-40234",
  storageBucket: "akkk-40234.firebasestorage.app",
  messagingSenderId: "551985109087",
  appId: "1:551985109087:web:e2162df9b72dd5ef96a3ea",
  measurementId: "G-ELRJT4XL1B"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);