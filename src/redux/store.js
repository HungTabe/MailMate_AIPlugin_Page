import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './themeSlide';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});