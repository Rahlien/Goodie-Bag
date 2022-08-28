import { configureStore } from "@reduxjs/toolkit";
import './slices/candiesSlice'
import candiesReducer from './slices/candiesSlice'
import logger from 'redux-logger'



export const store = configureStore({
  reducer: {
    candies: candiesReducer,
    middleware: [logger]
  }
});
