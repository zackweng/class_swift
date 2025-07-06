import { configureStore } from '@reduxjs/toolkit'

import modal from './modalSlice'
import student from './studentSlice'

export const store = configureStore({
  reducer: {
    student,
    modal,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
