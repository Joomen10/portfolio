import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCPyiwJj_PieqkEhARD9WtSU9ihaPy6abk",
    authDomain: "my-portfolio-2af87.firebaseapp.com",
    projectId: "my-portfolio-2af87",
    storageBucket: "my-portfolio-2af87.firebasestorage.app",
    messagingSenderId: "876296130878",
    appId: "1:876296130878:web:b60d50ce6afae6910bdc6f",
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };