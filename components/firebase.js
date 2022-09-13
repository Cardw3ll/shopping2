import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBrpJhXl2tBU3sh4zSqA84I-K0yYd4auWE",
  authDomain: "restau-ed372.firebaseapp.com",
  projectId: "restau-ed372",
  storageBucket: "restau-ed372.appspot.com",
  messagingSenderId: "996299371576",
  appId: "1:996299371576:web:323237a913c8f357f8a2cd",
  measurementId: "G-HRBMVZ52B1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

// initializing Firestore
const db = getFirestore(app);

export {auth, db};