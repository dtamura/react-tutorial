import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './authSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  }
})