import { createSlice } from '@reduxjs/toolkit';
import { user_Data, user_Token } from '../../constants/tokenData';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userData: JSON.parse(localStorage.getItem(user_Data)) || null,  
    token: localStorage.getItem(user_Token) || null
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
    setUserToken: (state, action) => {
      state.token = action.payload;
    },
    clearUserData: (state) => {
      state.userData = null;
      state.token = null;
    },
  },
});

export const { setUserData, setUserToken, clearUserData } = userSlice.actions;
export default userSlice.reducer;