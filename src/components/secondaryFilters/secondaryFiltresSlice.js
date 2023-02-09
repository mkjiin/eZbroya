import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    additionalFiltresdata: {
        filters: []
    },
    additionalFiltresLoadingStatus: 'idle'
}

export const fetchedAdditionalFiltres = createAsyncThunk(
    'additionalFlitres/fetchedAdditionalFiltres',
    () => {
        const { request } = useHttp();
        return request(`https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/additionalFiltres/0.json`)
    }
)

const additionalFiltresSlice = createSlice({
    name: 'additionalFiltres',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchedAdditionalFiltres.pending, state => {state.additionalFiltresLoadingStatus = 'loading'})
            .addCase(fetchedAdditionalFiltres.fulfilled, (state, action) => {
                console.log(action.payload)
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
    additionalFiltresFetchingError
} = actions;
