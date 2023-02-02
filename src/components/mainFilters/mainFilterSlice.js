import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    categoryLoadingStatus: 'idle',
    category: [],
    activeCategory: 'tank'
}

export const fetchedCategories = createAsyncThunk(
    'filters/fetchedCategories',
    () => {
        const {request} = useHttp(); 
        return request("http://localhost:3001/filters")
    }
)

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        activeCategoryChanged: (state, aciton) => {state.activeCategory = aciton.payload}
    },
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
    categoriesFetchingError,
    activeCategoryChanged
} = actions;