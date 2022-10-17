import { createStore } from "redux";
import { productReducer } from "./Reducers/ProductReducer";
const store = createStore(
  productReducer,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
);
export default store;
