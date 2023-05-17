import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBDK4TuNvA4hxcCex3LMuvotj9SizGwMUs",
  authDomain: "eclone-f76ca.firebaseapp.com",
  projectId: "eclone-f76ca",
  storageBucket: "eclone-f76ca.appspot.com",
  messagingSenderId: "99169221032",
  appId: "1:99169221032:web:a2a99015950eb3d4ac059d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
