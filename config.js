// Firebase configuration for Personal Space.
// This file contains the public web-app configuration, not a password.
const firebaseConfig = {
  apiKey: "AIzaSyC9mxl5627RHgqlW2SIUwgnv7EPjoHU6uM",
  authDomain: "personal-66373.firebaseapp.com",
  projectId: "personal-66373",
  storageBucket: "personal-66373.firebasestorage.app",
  messagingSenderId: "591867349690",
  appId: "1:591867349690:web:c2828bbab772a1c1a4d083",
  measurementId: "G-ZTG88DHT5S"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
