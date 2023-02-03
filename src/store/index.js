import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";
import weapons from '../components/weaponList/weaponSlice'
import categories from '../components/mainFilters/mainFilterSlice'

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next ({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: { categories, weapons},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;