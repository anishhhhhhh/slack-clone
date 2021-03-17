import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU6ygUrtmRpTg2ToHKAupz_TjQRH3fP8M",
  authDomain: "slack-clone-a82e7.firebaseapp.com",
  projectId: "slack-clone-a82e7",
  storageBucket: "slack-clone-a82e7.appspot.com",
  messagingSenderId: "225480589303",
  appId: "1:225480589303:web:5e2c9714c4c8248ac5b8f2",
  measurementId: "G-027TH8H1FV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
