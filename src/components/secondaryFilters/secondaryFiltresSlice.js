import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    additionalFiltresdata: {
        filters: [],
        filtersLabels: []
    },
    additionalFiltresLoadingStatus: 'idle',
    additionalFiltresId: 0,
    filterShowStatus: false
}

export const fetchedAdditionalFiltres = createAsyncThunk(
    'additionalFlitres/fetchedAdditionalFiltres',
    (id) => {
        const { request } = useHttp();
        return request(`https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/additionalFiltres/${id}.json`)
    }
)

const additionalFiltresSlice = createSlice({
    name: 'additionalFiltres',
    initialState,
    reducers: {
        additionalFiltresIdChange: (state, action) => {state.additionalFiltresId = action.payload},
        showFilter: (state) => {
            state.filterShowStatus = true
        },
        hideFilter: (state) => {
            state.filterShowStatus = false
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchedAdditionalFiltres.pending, state => {state.additionalFiltresLoadingStatus = 'loading'})
            .addCase(fetchedAdditionalFiltres.fulfilled, (state, action) => {
                // console.log(action.payload)
                state.additionalFiltresLoadingStatus = 'idle';
                state.additionalFiltresdata = action.payload
            })
            .addCase(fetchedAdditionalFiltres.rejected, state => {state.additionalFiltresLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = additionalFiltresSlice;

export default reducer;

export const {
    additionalFiltresFetching,
    additionalFiltresFetched,
    additionalFiltresFetchingError,
    additionalFiltresIdChange,
    showFilter,
    hideFilter
} = actions;
