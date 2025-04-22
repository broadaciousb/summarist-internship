import { configureStore } from '@reduxjs/toolkit'
import LoggedInSlice from './LoggedInSlice'
import ToggleModalSlice from './ToggleModalSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      online: LoggedInSlice,
      toggleModal: ToggleModalSlice
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']