import {
    configureStore
} from "@reduxjs/toolkit";

import fetchDataReducer from "../slice/fetchDataSlice";

const store = configureStore({
    reducer: {
        data: fetchDataReducer,
    },
});

export default store;