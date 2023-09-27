import { combineReducers } from "redux";
import errorSlice from "./Slices/errorSlice";
import loadingSlice from "./Slices/loadingSlice";
import alertSlice from "./Slices/alertSlice";
import adminSlice from "./Slices/adminSlice";
import userSlice from "./Slices/userSlice";

const allSlices = combineReducers({
    error:errorSlice,
    load:loadingSlice,
    alert:alertSlice,
    admin:adminSlice,
    user:userSlice,
})

export default allSlices;