// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDovfdUJ4xs8ge3jLKGgUvhFXf4Lh86Wbc",
  authDomain: "todo-list-df151.firebaseapp.com",
  projectId: "todo-list-df151",
  storageBucket: "todo-list-df151.appspot.com",
  messagingSenderId: "1036078938301",
  appId: "1:1036078938301:web:11cad463a0e832fdfbdfd4",
  measurementId: "G-GESTNH7GNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { app, database, analytics};;