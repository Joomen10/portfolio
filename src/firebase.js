import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyCPyiwJj_PieqkEhARD9WtSU9ihaPy6abk",
  authDomain: "my-portfolio-2af87.firebaseapp.com",
  projectId: "my-portfolio-2af87",
  storageBucket: "my-portfolio-2af87.firebasestorage.app",
  messagingSenderId: "876296130878",
  appId: "1:876296130878:web:b60d50ce6afae6910bdc6f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };