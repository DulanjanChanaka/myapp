import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBGfmI3YMK-SCOlapLGBhR_3mwDl8WarhA",
    authDomain: "myapp-74e52.firebaseapp.com",
    projectId: "myapp-74e52",
    storageBucket: "myapp-74e52.appspot.com",
    messagingSenderId: "142870325038",
    appId: "1:142870325038:web:3081874aa000491f127cbf"
  };

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
  