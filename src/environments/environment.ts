
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const environment = {
    production: false, // Indica si el entorno es de producción o desarrollo,
    firebaseConfig: {
        apiKey: "AIzaSyB5QUE8PRV9zZqOKFlwoZKEzLBDk63nA6A",
        authDomain: "sistema-medico-mediperu.firebaseapp.com",
        projectId: "sistema-medico-mediperu",
        storageBucket: "sistema-medico-mediperu.appspot.com",
        messagingSenderId: "321355340785",
        appId: "1:321355340785:web:bdc2e1c7a711ba448a4250",
        measurementId: "G-EWR86B6J8F"
    }
  };

// Initialize Firebase
const app = initializeApp(environment.firebaseConfig);
const analytics = getAnalytics(app);
