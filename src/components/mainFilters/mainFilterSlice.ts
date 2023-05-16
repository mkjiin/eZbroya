import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

export type Category = {
    id: number;
    img: string;
    label: string;
    name: string;
};

interface CategoryInitialState {
    categoryLoadingStatus: string;
    category: Category[];
}

const initialState: CategoryInitialState = {
    categoryLoadingStatus: "idle",
    category: [],
};

export const fetchedCategories = createAsyncThunk<Category[]>(
    "filters/fetchedCategories",
    () => {
        const { request } = useHttp();
        return request(
            "https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/filters.json"
        );
    }
);

const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchedCategories.pending, (state) => {
                state.categoryLoadingStatus = "loading";
            })
            .addCase(fetchedCategories.fulfilled, (state, action) => {
                state.category = action.payload;
                state.categoryLoadingStatus = "idle";
            })
            .addCase(fetchedCategories.rejected, (state) => {
                state.categoryLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = categoriesSlice;

export default reducer;
