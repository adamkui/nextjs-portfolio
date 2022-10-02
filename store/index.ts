import { combineReducers, configureStore } from "@reduxjs/toolkit";

import common from "./common";
import blog from "./blog"

const reducer = combineReducers({
  common,
  blog
});

const store = configureStore({ reducer });

export default store;

declare global {
    type ApplicationState = ReturnType<typeof reducer>;

    type AppDispatch = typeof store.dispatch;
  
    type GetState = () => ApplicationState;

  }