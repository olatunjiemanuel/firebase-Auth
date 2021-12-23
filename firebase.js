// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9emJF09iQzECQfu4a59bIduYAeMDxeeM",
  authDomain: "fir-auth-a4647.firebaseapp.com",
  projectId: "fir-auth-a4647",
  storageBucket: "fir-auth-a4647.appspot.com",
  messagingSenderId: "940843060652",
  appId: "1:940843060652:web:0a9a965df15d6aa2c33e09",
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const auth = firebase.auth();

export { auth };
