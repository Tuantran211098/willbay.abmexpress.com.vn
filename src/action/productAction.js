import axios from "axios";
import React , {useState} from 'react';
import {
  GET_PRODUCTS_ERROR,
  ADD_ITEM,
  GET_PRODUCTS_LOADING,
  GET_PRODUCTS_SUCCESS,
  GET_ALL_PRODUCTS_SUCCESS,
} from "../reducer/product/productsType";
import firebase from "firebase/app"
import { getAuth } from "firebase/auth"
import "firebase/firestore"
import "firebase/auth"
// Product actions here
export const getProducted = (product) => async (dispatch) => {
  try {
    console.log("data action",product);
    dispatch({ type: ADD_ITEM, payload: product });
  } catch (error) {
     console.log("in the logi func catch",error);
    dispatch({ type: GET_PRODUCTS_ERROR, payload: error.message });
  }
};

