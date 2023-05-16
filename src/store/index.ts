import { configureStore } from "@reduxjs/toolkit";
import weapons from "../components/weaponList/weaponSlice";
import categories from "../components/mainFilters/mainFilterSlice";
import additionalFiltres from "../components/secondaryFilters/additionalFiltres/additionalFiltresSlice";
import slider from "../components/newsComp/newsSlice";
import infoPage from "../pages/infoPage/infoPageSlice";

const store = configureStore({
    reducer: { categories, weapons, additionalFiltres, slider, infoPage },
    devTools: process.env.NODE_ENV !== "production",
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
