import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loading: false,
};

const loadingSlice = createSlice({
    name:"load",
    initialState,
    reducers:{
        setLoad:(state) => {
            state.loading = true;
        },
        clearLoad:(state) => {
            state.loading = false;
        }
    }
});

export const {setLoad,clearLoad} = loadingSlice.actions;
export default loadingSlice.reducer;