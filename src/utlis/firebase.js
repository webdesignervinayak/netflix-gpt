// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOo_hLrlzrfKKrtXWqbTNnybVKu-Y__s4",
  authDomain: "netflix-gpt-fee62.firebaseapp.com",
  projectId: "netflix-gpt-fee62",
  storageBucket: "netflix-gpt-fee62.appspot.com",
  messagingSenderId: "671484038895",
  appId: "1:671484038895:web:e918f8146553b973d8951a",
  measurementId: "G-L51E4TX0NF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();