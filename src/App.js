import React, { useState } from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/user/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext} from "react";

import ListProduct from "./pages/list/product/ListProduct";

// import  firebase  from '@firebase/app'
// import "firebase/firestore";
// import "firebase/auth";


// firebase.initializeApp({
//   apiKey: 'AIzaSyAr8RBsgNuPynvEQOh5DfC2EHXKdnimeqw',
//   authDomain: 'willbay-84f1d.firebaseapp.com',
//   projectId: 'willbay-84f1d'
// });
// var db = firebase.firestore();
// db.collection("products").get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//   // console.log(doc.id,"-", doc.data().TEN,"-", doc.data().TUOI,"-", doc.data().DIACHI,"-", doc.data().CHUCVU);
//   console.log(doc.id,"-", doc.data().MABILL,"-", doc.data().NGUOINHAN,"-", doc.data().TRANGTHAI,"-", doc.data().TRONGLUONG);
//   });
// });




import firebase from "firebase/app"
import { getAuth } from "firebase/auth"
import "firebase/firestore"
import "firebase/auth"
import AllRoutes from "./allRoute/AllRoutes";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { DarkModeContext } from "./context/darkModeContext";
//  { getFirestore } from '@firebase/firestore';

// Your web app's Firebase configuration

const  App = () => {
return (
    <div>
      <div className="header">
        <Navbar/>
      </div>
      <div className="page-content">
        <Sidebar/>
        <div className="page-content-right">
          <AllRoutes/> 
        </div>
        
      </div>
    </div>
  );
}

export default App;
