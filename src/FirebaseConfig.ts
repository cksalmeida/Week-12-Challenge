import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAwMt11rf8BIWFr4AnbHlYG1F90TaOpKqo",
    authDomain: "e-commerce-furniro-2b7f0.firebaseapp.com",
    projectId: "e-commerce-furniro-2b7f0",
    storageBucket: "e-commerce-furniro-2b7f0.appspot.com",
    messagingSenderId: "178987571655",
    appId: "1:178987571655:web:51e5a868445f59b6b761e2",
    measurementId: "G-SXPBSE1LVK"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
