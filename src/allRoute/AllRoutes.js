import React, { useState } from "react";
import Home from "../pages/home/Home";
import List from "../pages/list/user/List";
import ListProduct from "../pages/list/product/ListProduct";
import New from "../pages/new/New";
import Single from "../pages/single/Single";
import { productInputs, userInputs } from "./../formSource";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { DarkModeContext } from "../context/darkModeContext";
const AllRoutes = () => {
   
    return (
      <>
          {/* <div className={darkMode ? "app dark" : "app"}> */}
              
                    <Routes>
                    <Route path="/"> 
                    <Route path="/" element={<Home/>} />
                    {/* <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/> */}
                    <Route path="users">
                        <Route index element={<List/>}/>
                        <Route path=":userId" element={<Single/>}/>
                        <Route path="new" element={<New inputs={userInputs} title="Add New User"/>}/>
                    </Route>
                    <Route path="products">
                        <Route index element={<ListProduct/>}/>
                         <Route path=":productId" element={<Single/>}/> 
                        <Route path="new" element={<New inputs={productInputs} title="Add New Product"/>}/>
                    </Route>
                    {/* <Route path="/products/:id" element={<Single/>}></Route> */}
                    </Route>
                    </Routes>
               
            {/* </div> */}
        </>
    )
  }
  export default AllRoutes