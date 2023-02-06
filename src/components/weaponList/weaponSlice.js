import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    weaponsLoadingStatus: 'idle',
    weapons: [],
    activeCategory: 'tanks',
    start: 0,
    end: 5,
    weaponsEnded: false
}

export const fetchedWeapons = createAsyncThunk(
    'weapons/fetchedWeapons',
    (args) => {
        console.log('fetch')
        const {activeCategory, start, end} = args
        const {request} = useHttp();
        return request(`https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories/${activeCategory}.json?orderBy="$key"&startAt="${start}"&endAt="${end}"`).then(data => Object.values(data));
    }
)



const filtersSlice = createSlice({
    name: 'weapons',
    initialState,
    reducers: {
        activeCategoryChanged: (state, action) => {
            state.start = 0;
            state.end = 5;
            state.weapons = [];
            state.weaponsEnded = false;
            state.activeCategory = action.payload},
        limitChange: (state) => {state.limit = state.limit + 6},
        limitReset: (state, action) => {state.limit = action.payload},
        weaponsPaginate: (state, action) => {
            // state.start = state.start + 6;
            // state.end = state.end + 6

            state.weapons = [...state.weapons, ...action.payload];

            if(action.payload.length <= 5) {
                state.weaponsEnded = true
            }
        }
    },
    extraReducers: (builder) => {
    builder
        .addCase(fetchedWeapons.pending, state => {state.weaponsLoadingStatus = 'loading'})
        .addCase(fetchedWeapons.fulfilled, (state, action) => {
            state.start = state.start + 6;
            state.end = state.end + 6

            if(action.payload.length < 5) {
                state.weaponsEnded = true
            }
            
            if(state.weapons.length === 0) {
            console.log('aaaa')    
            state.weapons = action.payload
            }
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
    limitReset,
    weaponsPaginate
} = actions;