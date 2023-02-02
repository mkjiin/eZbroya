import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    weaponsLoadingStatus: 'idle',
    weapons: [],
}

export const fetchedWeapons = createAsyncThunk(
    'weapons/fetchedWeapons',
    () => {
        const {request} = useHttp();
        return request(`http://localhost:3001/vehicles`)
    }
)

const filtersSlice = createSlice({
    name: 'weapons',
    initialState,
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
    weaponsFetchingError
} = actions;