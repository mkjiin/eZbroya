import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    weaponsLoadingStatus: 'idle',
    weapons: [],
    activeCategory: 'tanks',
    limit: 6
}

export const fetchedWeapons = createAsyncThunk(
    'weapons/fetchedWeapons',
    (args) => {
        console.log('fetch')
        const {activeCategory, limit} = args
        const {request} = useHttp();
        return request(`https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories/${activeCategory}.json?orderBy="$key"&limitToFirst=${limit.toString()}`)
    }
)



const filtersSlice = createSlice({
    name: 'weapons',
    initialState,
    reducers: {
        activeCategoryChanged: (state, action) => {state.activeCategory = action.payload},
        limitChange: (state) => {state.limit = state.limit + 6},
        limitReset: (state, action) => {state.limit = action.payload}
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
    activeCategoryChanged,
    limitChange,
    limitReset
} = actions;