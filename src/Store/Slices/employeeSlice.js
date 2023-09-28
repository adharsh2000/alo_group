import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    data:[],
    fetchCount:0,
    totalCount:0
}

const emplyeeSlice = createSlice({
    name: 'employees',
    initialState,
    reducers:{
        getEmployees(state,action){
            state.data = action.payload.data;
            state.fetchCount = action.payload.fetchCount;
            state.totalCount = action.payload.totalCount;
        },
        updateEmployeeList(state,action){
            state.data.unshift(action.payload.data);
        }
    }
});

export const { getEmployees,updateEmployeeList } = emplyeeSlice.actions;
export default emplyeeSlice.reducer;