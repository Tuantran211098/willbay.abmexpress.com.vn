import firebase from 'firebase/app'
import "firebase/firestore";
import "firebase/auth"
import Register from "./pages/register/register";

firebase.initializeApp({
  apiKey: "AIzaSyAr8RBsgNuPynvEQOh5DfC2EHXKdnimeqw",
  authDomain: "willbay-84f1d.firebaseapp.com",
  projectId: "willbay-84f1d",
  storageBucket: "willbay-84f1d.appspot.com", 
  messagingSenderId: "784487314419",
  appId: "1:784487314419:web:543372220cddf096f91886"
});

// Initialize Firebase
var db = firebase.firestore();
  db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
    console.log(doc.id,"-", doc.data().TEN,"-", doc.data().TUOI,"-", doc.data().DIACHI,"-", doc.data().CHUCVU);
    });
  });

console.log(apps);