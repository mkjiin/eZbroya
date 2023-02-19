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

    },
    restOfLink: null
}

export const fetchedInfoPage = createAsyncThunk(
    'infoPage/fetchedInfoPage',
    (restOfLink) => {
        const { request } = useHttp();
        return request(`https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories/${restOfLink}.json`)
    }
);

const infoPageSlice = createSlice({
    name: 'infoPage',
    initialState,
    reducers: {
        getRestOfLink: (state, action) => {state.restOfLink = action.payload;
        console.log(action.payload)}
    },
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
    getRestOfLink
} = actions;