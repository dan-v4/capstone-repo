import { configureStore } from '@reduxjs/toolkit'
import programDataSlice from '../slices/programDataSlice'

export const store = configureStore({
  reducer: {
    programData: programDataSlice,
  },
})