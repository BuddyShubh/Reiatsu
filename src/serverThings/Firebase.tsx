// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNTsELIf5bynSd5a07OQNThd0da4amjgg",
  authDomain: "reiatsu-10.firebaseapp.com",
  projectId: "reiatsu-10",
  storageBucket: "reiatsu-10.appspot.com",
  messagingSenderId: "329109389097",
  appId: "1:329109389097:web:de99a3df58a66ae62d4138",
  measurementId: "G-PSBRC6V0CB",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const storage = getStorage(app);
