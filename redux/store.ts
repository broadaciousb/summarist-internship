import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer, } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from '@reduxjs/toolkit';
import LoggedInSlice from './LoggedInSlice'
import ToggleModalSlice from './ToggleModalSlice';
import bookSlice from './bookSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['online', 'book',]
}

const rootReducer = persistReducer(persistConfig, combineReducers({}))

export const makeStore = () => {
  return configureStore({
    reducer: {
      online: LoggedInSlice,
      toggleModal: ToggleModalSlice,
      myBook: bookSlice
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']