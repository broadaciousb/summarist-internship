import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface ModalState {
  isSideBarOpen: boolean
}

// Define the initial state using that type
const initialState: ModalState = {
  isSideBarOpen: false,
}

export const sideBarSlice = createSlice({
  name: 'toggleSideBar',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.isSideBarOpen = true
    },
    decrement: (state) => {
      state.isSideBarOpen = false
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<boolean>) => {
      state.isSideBarOpen = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = sideBarSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.toggleSideBar.isSideBarOpen

export default sideBarSlice.reducer