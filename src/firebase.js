import { initializeApp } from "firebase/app";
import{ getFirestore } from "firebase/firestore";
  
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNWHR78X7CJpak35AOfEbJggsfbbHLcPk",
  authDomain: "inventory-database-98f1f.firebaseapp.com",
  projectId: "inventory-database-98f1f",
  storageBucket: "inventory-database-98f1f.appspot.com",
  messagingSenderId: "926225458219",
  appId: "1:926225458219:web:7a9fbc54d973a26219766e",
  measurementId: "G-29LJ8FG51K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
  
export default db;