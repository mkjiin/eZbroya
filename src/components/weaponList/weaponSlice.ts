import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

export type Weapon = {
    status: string;
    additionalFiltres: number;
    country: string;
    country_icon: string;
    description: string;
    id: number;
    img: string[];
    name: string;
    type: string;
    year: string;
    yearValue: number;
    introInfo: string[][];
    uaInfo: string[];
    resources: {
        youtube: string;
        wiki: string;
        mil: string;
    };
};

interface WeaponsInitialState {
    weaponsLoadingStatus: string;
    weapons: Weapon[];
    activeCategory: string;
    turnedCategory: boolean;
    start: number;
    end: number;
    weaponsEnded: boolean;
    activeFilter: string;
    activeAdditionalFilter: string | number;
    activeStatus: string;
    yearValue: null | number;
}

const initialState: WeaponsInitialState = {
    weaponsLoadingStatus: "idle",
    weapons: [],
    activeCategory: "Танки",
    turnedCategory: false,
    start: 0,
    end: 11,
    weaponsEnded: true,
    activeFilter: "all",
    activeAdditionalFilter: "all",
    activeStatus: "all",
    yearValue: null,
};

export const fetchedWeapons = createAsyncThunk<
    Weapon[],
    { activeCategory: string; start: number; end: number }
>("weapons/fetchedWeapons", (args) => {
    const { activeCategory, start, end } = args;
    const { request } = useHttp();
    return request(
        `https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories/${activeCategory}.json?orderBy="$key"&startAt="${start}"&endAt="${end}"`
    ).then((data) => Object.values(data));
});

const filtersSlice = createSlice({
    name: "weapons",
    initialState,
    reducers: {
        activeCategoryChanged: (state, action: PayloadAction<string>) => {
            state.start = 0;
            state.end = 11;
            state.weapons = [];
            state.weaponsEnded = true;
            state.activeFilter = "all";
            state.activeAdditionalFilter = "all";
            state.activeStatus = "all";
            state.yearValue = null;
            state.activeCategory = action.payload;
        },
        weaponsPaginate: (state, action: PayloadAction<Weapon[]>) => {
            if (action.payload.length <= 10) {
                state.weaponsEnded = true;
            }

            state.weapons = [...state.weapons, ...action.payload];
        },
        activeFilterChanged: (state, action: PayloadAction<string>) => {
            state.weaponsEnded = true;
            state.weapons = [];
            state.start = 0;
            state.end = 25;
            state.activeFilter = action.payload;
        },
        activeFilterReset: (state) => {
            state.weaponsEnded = true;
            state.start = 0;
            state.end = 11;
            if (state.yearValue !== null) {
                state.start = 0;
                state.end = 25;
            }
            if (state.activeAdditionalFilter !== "all") {
                state.start = 0;
                state.end = 25;
            }
            if (state.activeStatus !== "all") {
                state.start = 0;
                state.end = 25;
            }
            state.weapons = [];
            state.activeFilter = "all";
        },
        yearChanging: (state, action: PayloadAction<number>) => {
            state.weaponsEnded = true;
            state.start = 0;
            state.end = 25;
            if (state.yearValue !== action.payload) {
                state.weapons = [];
            }
            state.yearValue = action.payload;
            // if(state.yearValue === null) {
            //     state.start = 0;
            //     state.end = 6;
            // }
        },
        additionalFilterChanged: (
            state,
            action: PayloadAction<string | number>
        ) => {
            state.weaponsEnded = true;
            state.weapons = [];
            state.start = 0;
            state.end = 25;
            state.activeAdditionalFilter = action.payload;
        },
        activeAdditionalFilterReset: (state) => {
            state.weaponsEnded = true;
            state.start = 0;
            state.end = 11;
            if (state.yearValue !== null) {
                state.start = 0;
                state.end = 25;
            }
            if (state.activeFilter !== "all") {
                state.start = 0;
                state.end = 25;
            }
            if (state.activeStatus !== "all") {
                state.start = 0;
                state.end = 25;
            }
            state.weapons = [];
            state.activeAdditionalFilter = "all";
        },
        activeStatusChange: (state, action: PayloadAction<string>) => {
            state.weaponsEnded = true;
            state.weapons = [];
            state.start = 0;
            state.end = 25;
            state.activeStatus = action.payload;
        },
        activeStatusReset: (state) => {
            state.weaponsEnded = true;
            state.start = 0;
            state.end = 11;
            if (state.yearValue !== null) {
                state.start = 0;
                state.end = 25;
            }
            if (state.activeFilter !== "all") {
                state.start = 0;
                state.end = 25;
            }
            if (state.activeAdditionalFilter !== "all") {
                state.start = 0;
                state.end = 25;
            }
            state.weapons = [];
            state.activeStatus = "all";
        },
        reset: (state) => {
            state.weapons = [];
            state.start = 0;
            state.end = 11;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchedWeapons.pending, (state) => {
                state.weaponsLoadingStatus = "loading";
            })
            .addCase(fetchedWeapons.fulfilled, (state, action) => {
                state.weaponsEnded = false;
                state.start = state.start + 12;
                state.end = state.end + 12;

                if (action.payload.length < 12 || action.payload.length > 12) {
                    state.weaponsEnded = true;
                }

                if (state.weapons.length === 0) {
                    state.weapons = action.payload;
                }
                state.weaponsLoadingStatus = "idle";
            })
            .addCase(fetchedWeapons.rejected, (state) => {
                state.weaponsLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = filtersSlice;

export default reducer;

export const {
    activeCategoryChanged,
    weaponsPaginate,
    activeFilterChanged,
    activeFilterReset,
    yearChanging,
    additionalFilterChanged,
    activeAdditionalFilterReset,
    activeStatusChange,
    activeStatusReset,
    reset,
} = actions;
