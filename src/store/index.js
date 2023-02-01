import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next ({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: { [apiSlice.reducerPath]: apiSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware, apiSlice.middleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;