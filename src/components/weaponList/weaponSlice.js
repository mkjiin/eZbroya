import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    weaponsLoadingStatus: 'idle',
    weapons: [],
    activeCategory: 'tanks'
}

export const fetchedWeapons = createAsyncThunk(
    'weapons/fetchedWeapons',
    (category) => {
        const {request} = useHttp();
        return request(`https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories/${category}.json`)
    }
)

const filtersSlice = createSlice({
    name: 'weapons',
    initialState,
    reducers: {
        activeCategoryChanged: (state, action) => {state.activeCategory = action.payload}
    },
    extraReducers: (builder) => {
    builder
        .addCase(fetchedWeapons.pending, state => {state.weaponsLoadingStatus = 'loading'})
        .addCase(fetchedWeapons.fulfilled, (state, action) => {
            state.weapons = action.payload;
            state.weaponsLoadingStatus = 'idle';
        })
        .addCase(fetchedWeapons.rejected, state => {state.weaponsLoadingStatus = 'error'})
        .addDefaultCase(() => {})
    }
})

const {actions, reducer} = filtersSlice;

export default reducer;

export const {
    weaponsFetching,
    weaponsFetched, 
    weaponsFetchingError,
    activeCategoryChanged
} = actions;