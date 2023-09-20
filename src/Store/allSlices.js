import { combineReducers } from "redux";
import errorSlice from "./Slices/errorSlice";

const allSlices = combineReducers({
    error:errorSlice,
})

export default allSlices;