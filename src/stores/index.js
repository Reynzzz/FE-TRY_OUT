import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers,
  } from "redux";
  import { thunk } from "redux-thunk";

  const combinedReducers = combineReducers({
   
})

const store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;