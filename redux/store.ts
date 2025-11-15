import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";
import LoggedInSlice from "./LoggedInSlice";
import modalSlice from "./ToggleModalSlice";
import bookSlice from "./bookSlice";
import FontSizeSlice from "./FontSizeSlice";
import  sideBarSlice from "./ToggleSideBarSlice";
import userSlice from "./userSlice";
import LoadingSlice from "./LoadingSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["online", "myBook"],
};

const reducer = combineReducers({
  online: LoggedInSlice,
  toggleModal: modalSlice,
  myBook: bookSlice,
  toggleFontSize: FontSizeSlice,
  toggleSideBar: sideBarSlice,
  user: userSlice,
  loading: LoadingSlice,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const makeStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
});

// Infer the type of makeStore
export type AppStore = typeof makeStore;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
