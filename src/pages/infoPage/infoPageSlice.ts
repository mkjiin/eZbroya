import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

export type PageInfo = {
    name: string;
    country_icon: string;
    description: string;
    status: string;
    introInfo: string[][];
    uaInfo: string[];
    img: string[];
    resources: {
        youtube: string;
        wiki: string;
        mil: string;
    };
};

interface InfoPageInitialState {
    pageLoadingStatus: string;
    pageInfo: PageInfo;
}

const initialState: InfoPageInitialState = {
    pageLoadingStatus: "idle",
    pageInfo: {
        name: "",
        country_icon: "",
        description: "",
        status: "",
        introInfo: [],
        uaInfo: [],
        img: [],
        resources: {
            youtube: "",
            wiki: "",
            mil: "",
        },
    },
};

export const fetchedInfoPage = createAsyncThunk<
    PageInfo,
    { type: string; id: number }
>("infoPage/fetchedInfoPage", (args) => {
    const { type, id } = args;
    const { request } = useHttp();
    return request(
        `https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories/${type}/${id}.json`
    );
});

const infoPageSlice = createSlice({
    name: "infoPage",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchedInfoPage.pending, (state) => {
                state.pageLoadingStatus = "loading";
            })
            .addCase(fetchedInfoPage.fulfilled, (state, action) => {
                state.pageLoadingStatus = "idle";
                state.pageInfo = action.payload;
            })
            .addCase(fetchedInfoPage.rejected, (state) => {
                state.pageLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = infoPageSlice;

export default reducer;
