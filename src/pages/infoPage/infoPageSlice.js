import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    pageLoadingStatus: 'idle',
    pageInfo: {
        introInfo: [],
        uaInfo: [],
        img: [],
        resources: {
            youtube: '',
            wiki: '',
            mil: ''
        }

    }
}

export const fetchedInfoPage = createAsyncThunk(
    'infoPage/fetchedInfoPage',
    (args) => {
        const { type, id } = args
        const { request } = useHttp();
        return request(`https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories/${type}/${id}.json`)
    }
);

const infoPageSlice = createSlice({
    name: 'infoPage',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchedInfoPage.pending, state => {state.pageLoadingStatus = 'loading'})
            .addCase(fetchedInfoPage.fulfilled, (state, action) => {
                state.pageLoadingStatus = 'idle';
                state.pageInfo = action.payload;
            })
            .addCase(fetchedInfoPage.rejected, state => {state.pageLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = infoPageSlice;

export default reducer;

export const {
    infoPageFetching, 
    infoPageFetched, 
    infoPageError,
} = actions;