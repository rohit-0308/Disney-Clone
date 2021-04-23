import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDm6HJ8BPtB6RVGqSA8CcOxsswbi8GdlG4",
  authDomain: "disney-clone-0308.firebaseapp.com",
  projectId: "disney-clone-0308",
  storageBucket: "disney-clone-0308.appspot.com",
  messagingSenderId: "380332481085",
  appId: "1:380332481085:web:9e9df3d34521aceee6e854",
  measurementId: "G-7PV6EGYKS5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
// export default db;
