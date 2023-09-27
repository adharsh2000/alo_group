import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    adminData: null,
    token: null,
  },
  reducers: {
    setAdminData: (state, action) => {
      state.adminData = action.payload;
    },
    setAdminToken: (state, action) => {
      state.token = action.payload;
    },
    clearAdminData: (state) => {
      state.adminData = null;
      state.token = null;
    },
  },
});

export const { setAdminData, setAdminToken, clearAdminData } = adminSlice.actions;
export default adminSlice.reducer;
