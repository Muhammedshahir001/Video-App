import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB7WEmpNT9klkWQ7GZUE03lbu7c9jJ1Zro",
  authDomain: "video-app-6cf8c.firebaseapp.com",
  projectId: "video-app-6cf8c",
  storageBucket: "video-app-6cf8c.appspot.com",
  messagingSenderId: "868197240037",
  appId: "1:868197240037:web:20a62d165a5ab15239980c",
  measurementId: "G-XF1NP5XTT0",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const userRef = collection(firebaseDB,"users")
export const meetingsRef = collection(firebaseDB, "meetings");
