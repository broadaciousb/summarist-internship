import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'
import type { User } from 'firebase/auth';

// Define a type for the slice state
interface UserState {
  currentUser: User | null;
}

// Define the initial state using that type
const initialState: UserState = {
  currentUser: null,
}

export const userSlice = createSlice({
  name: 'thisUser',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = null;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload
    },
  },
})

export const { setUser, clearUser, incrementByAmount } = userSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const currentUser = (state: RootState) => state.user.currentUser;

export default userSlice.reducer;