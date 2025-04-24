// src/firebase.js

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ_U1BwkuCYK5uZ8_gYa7kOpM-vwocZOU",
  authDomain: "food-d8182.firebaseapp.com",
  databaseURL: "https://food-d8182-default-rtdb.firebaseio.com",
  projectId: "food-d8182",
  storageBucket: "food-d8182.appspot.com", // ✅ सही कर दिया गया
  messagingSenderId: "202984855683",
  appId: "1:202984855683:web:41a45248ee395012e463b6",
  measurementId: "G-E2F0G92EM7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
