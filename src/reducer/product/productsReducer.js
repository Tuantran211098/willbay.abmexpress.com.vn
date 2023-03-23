import { GET_PRODUCTS_ERROR,ADD_ITEM, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS,GET_ALL_PRODUCTS_SUCCESS } from "./productsType";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
};

export const productsReducer = (state = productInitalState,action) => {
  const {type,payload} = action;
  console.log(payload,'payload');
  switch(type) {
    // case ADD_ITEM : {
    //   return {...state , loading : true, payload};
    // }
    case ADD_ITEM : {
      return {...state , loading : true, data: payload};
    }
    case GET_PRODUCTS_SUCCESS : {
      return {...state , loading : false , error : false , data : payload}
    }
    // case GET_ALL_PRODUCTS_SUCCESS : {
    //   return {...state , loading : false , error : false , dataAll : payload}
    // }
    case GET_PRODUCTS_ERROR : {
      return {...state , error : true , loading : false};
    }
    default : return state;
  }
};
