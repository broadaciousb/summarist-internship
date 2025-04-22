import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

// Define a type for the slice state
interface ModalState {
  isModalOpen: boolean
}

// Define the initial state using that type
const initialState: ModalState = {
  isModalOpen: false,
}

export const modalSlice = createSlice({
  name: 'toggleModal',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      state.isModalOpen = true
    },
    decrement: (state) => {
      state.isModalOpen = false
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<boolean>) => {
      state.isModalOpen = action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.toggleModal.isModalOpen

export default modalSlice.reducer