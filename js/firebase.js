import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
 
  apiKey: "AIzaSyCLdsj0_q_DeJa5raJtvJU2jkP0VOExepw",
 
  authDomain: "seatallocationtool.firebaseapp.com",
 
  projectId: "seatallocationtool",
 
  storageBucket: "seatallocationtool.firebasestorage.app",
 
  messagingSenderId: "202060128905",
 
  appId: "1:202060128905:web:0b3837c277103a27a69c58",
 
  measurementId: "G-3S2H1ELQ8Z"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Make Firebase available globally
window.db = db;
window.firestore = {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  where,
};
