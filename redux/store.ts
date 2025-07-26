import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import LoggedInSlice from "./LoggedInSlice";
import ToggleModalSlice from "./ToggleModalSlice";
import bookSlice from "./bookSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["online", "myBook"],
};

const reducer = combineReducers({
  online: LoggedInSlice,
  toggleModal: ToggleModalSlice,
  myBook: bookSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const makeStore = configureStore({
  reducer: persistedReducer
});

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
