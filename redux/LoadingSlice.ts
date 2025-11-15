import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface Loading {
  loading: boolean
}

// Define the initial state using that type
const initialState: Loading = {
  loading: false,
}

export const LoadingSlice = createSlice({
  name: 'loading',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true
    },
    stopLoading: (state) => {
      state.loading = false
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
  },
})

export const { startLoading, stopLoading, incrementByAmount } = LoadingSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const Loading = (state: RootState) => state.loading.loading
export default LoadingSlice.reducer