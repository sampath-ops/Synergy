// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDcZrVSELXkzen7hX5o666GsJE6zZy46do",
  authDomain: "synergy2-dbb63.firebaseapp.com",
  projectId: "synergy2-dbb63",
  storageBucket: "synergy2-dbb63.appspot.com",
  messagingSenderId: "279700829371",
  appId: "1:279700829371:web:4c1f54acb0e0ed8124259e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {app,db};