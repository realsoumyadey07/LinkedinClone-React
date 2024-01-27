import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyC9uVbjioaO3uGk2s8GOS0D2qEFpOKRxRo",
  authDomain: "linkedinclone-bfa9a.firebaseapp.com",
  projectId: "linkedinclone-bfa9a",
  storageBucket: "linkedinclone-bfa9a.appspot.com",
  messagingSenderId: "844816100975",
  appId: "1:844816100975:web:98077f9e766fcd66d6279a"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export {auth, provider};