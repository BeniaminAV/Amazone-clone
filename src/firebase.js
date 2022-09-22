// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAnhKg9DjGgLmHd0FaqViS9dRP2CGCu7hc",
    authDomain: "e-clone-7e5df.firebaseapp.com",
    projectId: "e-clone-7e5df",
    storageBucket: "e-clone-7e5df.appspot.com",
    messagingSenderId: "314666605225",
    appId: "1:314666605225:web:f4fdbf7dd1478191fa27b8",
    measurementId: "G-ME861KLZG6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };