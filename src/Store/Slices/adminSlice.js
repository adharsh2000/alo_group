import { createSlice } from '@reduxjs/toolkit';
import { admin_Data, admin_Token } from '../../constants/tokenData';

const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    adminData: JSON.parse(localStorage.getItem(admin_Data)) || null,
    token: localStorage.getItem(admin_Token) || null
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
