import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh4V2AGPzTOfAmK1ohE67or3jQ975DvQU",
  authDomain: "portfolio-clones.firebaseapp.com",
  databaseURL: "https://portfolio-clones.firebaseio.com",
  projectId: "portfolio-clones",
  storageBucket: "portfolio-clones.appspot.com",
  messagingSenderId: "1080338138283",
  appId: "1:1080338138283:web:dd6b3d09acc9d2ba00a3ee",
  measurementId: "G-WERSM3FQBD"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {
  db,
  auth,
};
