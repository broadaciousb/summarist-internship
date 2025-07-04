import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from './store'

interface Book {
  id: string;
  author: string;
  title: string;
  subTitle: string;
  imageLink: string;
  audioLink: string;
  totalRating: number;
  averageRating: number;
  keyIdeas: number;
  type: string;
  status: string;
  subscriptionRequired: boolean;
  summary: string;
  tags: string[];
  bookDescription: string;
  authorDescription: string;
}

// Define a type for the slice state
interface BookState {
  currentBook: Book | null;
}

// Define the initial state using that type
const initialState: BookState = {
  currentBook: null,
}

export const bookSlice = createSlice({
  name: 'myBook',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setBook: (state, action: PayloadAction<Book>) => {
      state.currentBook = action.payload;
    },
    clearBook: (state) => {
      state.currentBook = null
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<Book>) => {
      state.currentBook = action.payload
    },
  },
})

export const { setBook, clearBook, incrementByAmount } = bookSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const currentBook = (state: RootState) => state.myBook.currentBook

export default bookSlice.reducer