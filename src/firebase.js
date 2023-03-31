import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyAkccRJDpdubWogxMmFuldG5vsXoVoandQ",
    authDomain: "cambi-bf722.firebaseapp.com",
    projectId: "cambi-bf722",
    storageBucket: "cambi-bf722.appspot.com",
    messagingSenderId: "283784427096",
    appId: "1:283784427096:web:e10b1854578e601533fc2d",
    measurementId: "G-1L3ZLRRVKZ"
  };
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// collections
export const usersCollection = collection(db, 'users')
