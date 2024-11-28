import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyCMGN1BGqXNUbkEwi8ug3H4xPX0yq1XI_8",
  authDomain: "akkk-40234.firebaseapp.com",
  projectId: "akkk-40234",
  storageBucket: "akkk-40234.firebasestorage.app",
  messagingSenderId: "551985109087",
  appId: "1:551985109087:web:110b81897e37b81a96a3ea",
  measurementId: "G-NXFKJG1E0N"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);