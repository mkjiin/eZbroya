import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    weaponsLoadingStatus: 'idle',
    weapons: [],
    activeCategory: 'tanks',
    turnedCategory: false,
    start: 0,
    end: 8,
    weaponsEnded: true,
    activeFilter: 'all',
    activeAdditionalFilter: 'all',
    activeStatus: 'all',
    yearValue: null,
}

export const fetchedWeapons = createAsyncThunk(
    'weapons/fetchedWeapons',
    (args) => {
        // console.log('fetch')
        const {activeCategory, start, end} = args
        const {request} = useHttp();
        return request(`https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories/${activeCategory}.json?orderBy="$key"&startAt="${start}"&endAt="${end}"`)
            .then(data => Object.values(data));
    }
)



const filtersSlice = createSlice({
    name: 'weapons',
    initialState,
    reducers: {
        activeCategoryChanged: (state, action) => {
            state.start = 0;
            state.end = 8;
            state.weapons = [];
            state.weaponsEnded = true;
            state.activeFilter = 'all';
            state.activeAdditionalFilter = 'all';
            state.activeStatus = 'all'
            state.yearValue = null;
            state.activeCategory = action.payload;
        },
        weaponsPaginate: (state, action) => {

            if(action.payload.length <= 5) {
                state.weaponsEnded = true
            }

            state.weapons = [...state.weapons, ...action.payload];
        },
        activeFilterChanged: (state, action) => {
            state.weaponsEnded = true;
            state.weapons = []
            state.start = 0;
            state.end = 25;
            state.activeFilter = action.payload
        },
        activeFilterReset: (state) => {
            state.weaponsEnded = true;
            state.start = 0;
            state.end = 8;
            if(state.yearValue !== null) {
                state.start = 0;
                state.end = 25;
            }
            if(state.activeAdditionalFilter !== 'all') {
                state.start = 0;
                state.end = 25;
            }
            if(state.activeStatus !== 'all') {
                state.start = 0;
                state.end = 25;
            }
            state.weapons = [];
            state.activeFilter = 'all';
        },
        yearChanging: (state, action) => {
            state.weaponsEnded = true;
            state.start = 0;
            state.end = 25;
            if(state.yearValue !== action.payload) {
                state.weapons = []
            }
            state.yearValue = action.payload
            // if(state.yearValue === null) {
            //     state.start = 0;
            //     state.end = 6;
            // }
        },
        additionalFilterChanged: (state, action) => {
            state.weaponsEnded = true;
            state.weapons = []
            state.start = 0;
            state.end = 25
            state.activeAdditionalFilter = action.payload
        },
        activeAdditionalFilterReset: (state) => {
            state.weaponsEnded = true;
            state.start = 0;
            state.end = 8;
            if(state.yearValue !== null) {
                state.start = 0;
                state.end = 25;
            }
            if(state.activeFilter !== 'all') {
                state.start = 0;
                state.end = 25;
            }
            if(state.activeStatus !== 'all') {
                state.start = 0;
                state.end = 25;
            }
            state.weapons = [];
            state.activeAdditionalFilter = 'all';
        },
        activeStatusChange: (state, action) => {
            state.weaponsEnded = true;
            state.weapons = []
            state.start = 0;
            state.end = 25;
            state.activeStatus = action.payload
        },
        activeStatusReset: (state) => {
            state.weaponsEnded = true;
            state.start = 0;
            state.end = 8;
            if(state.yearValue !== null) {
                state.start = 0;
                state.end = 25;
            }
            if(state.activeFilter !== 'all') {
                state.start = 0;
                state.end = 25;
            }
            if(state.activeAdditionalFilter !== 'all') {
                state.start = 0;
                state.end = 25;
            }
            state.weapons = [];
            state.activeStatus = 'all';
        },
        reset: (state) => {
            state.weapons = [];
            state.start = 0;
            state.end = 8;
        }
    },
    extraReducers: (builder) => {
    builder
        .addCase(fetchedWeapons.pending, state => {state.weaponsLoadingStatus = 'loading'})
        .addCase(fetchedWeapons.fulfilled, (state, action) => {
            state.weaponsEnded = false;
            state.start = state.start + 9;
            state.end = state.end + 9

            if (action.payload.length < 9 || action.payload.length > 9) {
                state.weaponsEnded = true;
            }
              
            console.log(action.payload)
            
            if(state.weapons.length === 0) {
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
    weaponsPaginate,
    activeFilterChanged,
    activeFilterReset,
    yearChanging,
    additionalFilterChanged,
    activeAdditionalFilterReset,
    activeStatusChange,
    activeStatusReset,
    reset
} = actions;