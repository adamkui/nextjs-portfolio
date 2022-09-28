import { combineReducers, configureStore } from "@reduxjs/toolkit";

import common from "./common";

const reducer = combineReducers({
  common,
});

const store = configureStore({ reducer });

export default store;

declare global {
    type ApplicationState = ReturnType<typeof reducer>;

    type AppDispatch = typeof store.dispatch;
  
    type GetState = () => ApplicationState;

  }