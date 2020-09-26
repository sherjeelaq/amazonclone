import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAY8Yj7QytdHcNJV0BguG_5ezUPXgCOPVk",
  authDomain: "fir-3a7d2.firebaseapp.com",
  databaseURL: "https://fir-3a7d2.firebaseio.com",
  projectId: "fir-3a7d2",
  storageBucket: "fir-3a7d2.appspot.com",
  messagingSenderId: "229852900912",
  appId: "1:229852900912:web:50e3910fb6a511b861c7f5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
