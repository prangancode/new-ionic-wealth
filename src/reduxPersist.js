// reduxPersist.js

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user"], // Add the reducers you want to persist here
};

const persistedReducer = (rootReducer) =>
  persistReducer(persistConfig, rootReducer);

export default persistedReducer;
