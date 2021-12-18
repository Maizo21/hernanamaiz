import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo02ZhfZj2ojbq82Eaj13gsld0uHWZXLI",
  authDomain: "store-4f435.firebaseapp.com",
  projectId: "store-4f435",
  storageBucket: "store-4f435.appspot.com",
  messagingSenderId: "463329437436",
  appId: "1:463329437436:web:345aa5eee188f95ef7d979",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
