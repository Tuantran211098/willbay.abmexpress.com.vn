import {
    legacy_createStore,
    combineReducers,
    compose,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
import { productsReducer } from "./reducer/product/productsReducer";
//   import { Authreducer } from "./Auth/auth.reducer";
//   import { SingleProductReducer } from "./SingleProduct/SingleProduct.reducer";

  const rootReducer = combineReducers({
    // AuthManager: Authreducer,
    // singleProduct: SingleProductReducer,
    product: productsReducer
  });
  
  const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  export const store = legacy_createStore(
    rootReducer,
    composer(applyMiddleware(thunk))
  );
  