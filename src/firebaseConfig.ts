// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB5QUE8PRV9zZqOKFlwoZKEzLBDk63nA6A",
  authDomain: "sistema-medico-mediperu.firebaseapp.com",
  projectId: "sistema-medico-mediperu",
  storageBucket: "sistema-medico-mediperu.appspot.com",
  messagingSenderId: "321355340785",
  appId: "1:321355340785:web:bdc2e1c7a711ba448a4250",
  measurementId: "G-EWR86B6J8F"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);