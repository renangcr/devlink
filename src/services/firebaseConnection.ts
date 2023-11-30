
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBmF_WAzKzVkTmXqlMhiPDvG0tLhtI8WNs",
  authDomain: "reactlinks-31b91.firebaseapp.com",
  projectId: "reactlinks-31b91",
  storageBucket: "reactlinks-31b91.appspot.com",
  messagingSenderId: "944542433852",
  appId: "1:944542433852:web:5a44747e57afa8f20bf939"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };