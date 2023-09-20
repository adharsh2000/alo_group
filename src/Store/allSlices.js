import { combineReducers } from "redux";
import errorSlice from "./Slices/errorSlice";
import loadingSlice from "./Slices/loadingSlice";

const allSlices = combineReducers({
    error:errorSlice,
    load:loadingSlice,
})

export default allSlices;