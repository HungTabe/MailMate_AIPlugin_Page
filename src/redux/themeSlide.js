import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    selectedTheme: 'null',
  },
  reducers: {
    setSelectedTheme: (state, action) => {
      state.selectedTheme = action.payload;
    },
  },
});

export const { setSelectedTheme } = themeSlice.actions;
export default themeSlice.reducer;
