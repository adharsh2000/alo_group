import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    errorMessage: null
};

const errorSlice = createSlice({
    name:"error",
    initialState,
    reducers:{
        setError :(state, acton) => {
            state.errorMessage = acton.payload;
        },
        clearError :(state) => {
            state.errorMessage = null;
        }
    }
});

export const {setError,clearError} = errorSlice.actions;
export default errorSlice.reducer;