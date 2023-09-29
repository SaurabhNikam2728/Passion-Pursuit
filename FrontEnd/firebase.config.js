// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAuzrYuZQ6NCzPwF8mTeDlysOrpKGy30DY",
  authDomain: "passionpursuit-20941.firebaseapp.com",
  projectId: "passionpursuit-20941",
  storageBucket: "passionpursuit-20941.appspot.com",
  messagingSenderId: "136478520006",
  appId: "1:136478520006:web:64065d79ad047011041dc7"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
