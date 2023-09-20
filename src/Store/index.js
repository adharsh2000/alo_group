import { configureStore } from "@reduxjs/toolkit"
import allSlices from "./allSlices"

const store = configureStore({reducer:allSlices});

export default store;