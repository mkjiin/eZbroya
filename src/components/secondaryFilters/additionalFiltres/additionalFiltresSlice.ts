import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { useHttp } from "../../../hooks/http.hook";

export type Filter = number | string;
type FilterData = {
    filters: Filter[];
    filtersLabels: string;
};

interface additionalFiltersInitialState {
    additionalFiltresdata: FilterData;
    additionalFiltresLoadingStatus: string;
    additionalFiltresId: number;
    filterShowStatus: boolean;
}

const initialState: additionalFiltersInitialState = {
    additionalFiltresdata: {
        filters: [],
        filtersLabels: "",
    },
    additionalFiltresLoadingStatus: "idle",
    additionalFiltresId: 0,
    filterShowStatus: false,
};

export const fetchedAdditionalFiltres = createAsyncThunk<FilterData, number>(
    "additionalFlitres/fetchedAdditionalFiltres",
    (id) => {
        const { request } = useHttp();
        return request(
            `https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/additionalFiltres/${id}.json`
        );
    }
);

const additionalFiltresSlice = createSlice({
    name: "additionalFiltres",
    initialState,
    reducers: {
        additionalFiltresIdChange: (state, action: PayloadAction<number>) => {
            state.additionalFiltresId = action.payload;
        },
        showFilter: (state) => {
            state.filterShowStatus = true;
        },
        hideFilter: (state) => {
            state.filterShowStatus = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchedAdditionalFiltres.pending, (state) => {
                state.additionalFiltresLoadingStatus = "loading";
            })
            .addCase(
                fetchedAdditionalFiltres.fulfilled,
                (state, action: PayloadAction<FilterData>) => {
                    state.additionalFiltresLoadingStatus = "idle";
                    state.additionalFiltresdata = action.payload;
                }
            )
            .addCase(fetchedAdditionalFiltres.rejected, (state) => {
                state.additionalFiltresLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = additionalFiltresSlice;

export default reducer;

export const { additionalFiltresIdChange, showFilter, hideFilter } = actions;
