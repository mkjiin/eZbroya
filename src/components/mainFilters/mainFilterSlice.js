import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    categoryLoadingStatus: 'idle',
    category: []
}

export const fetchedCategories = createAsyncThunk(
    'filters/fetchedCategories',
    () => {
        const {request} = useHttp(); 
        return request("https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/filters.json")
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchedCategories.pending, state => {state.categoryLoadingStatus = 'loading'})
            .addCase(fetchedCategories.fulfilled, (state, aciton) => {
                state.category = aciton.payload;
                state.categoryLoadingStatus = 'idle'
            })
            .addCase(fetchedCategories.rejected, state => {state.categoryLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = categoriesSlice;

export default reducer;

export const {
    categoriesFetching, 
    categoriesFetched,
    categoriesFetchingError
} = actions;