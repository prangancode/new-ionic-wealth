import { createStore, combineReducers, applyMiddleware } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { toastAlertReducer } from "./reducers/alertReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  productDetailsReducer,
  productsReducer,
} from "./reducers/productReducer";
import { profileReducer, userReducer } from "./reducers/userReducer";
// import persistedReducer from "./reduxPersist";

const reducer = combineReducers({
  products: productsReducer,
  productDetails: productDetailsReducer,
  toastifyAlert: toastAlertReducer,
  user: userReducer,
  profile: profileReducer,
  cart: cartReducer,
});

let initialState = {
  user: {
    user: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};

const middleware = [thunk];

const store = createStore(
  // persistedReducer(reducer), // Use the persisted reducer
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
