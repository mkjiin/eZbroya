import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

export type UaInfoArray = string[];
export type ImgArray = string[];

export type PageInfo = {
    name: string;
    country_icon: string;
    description: string;
    status: string;
    introInfo: string[][];
    uaInfo: UaInfoArray;
    img: ImgArray;
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
    { typingType: string; typingId: string }
>("infoPage/fetchedInfoPage", (args) => {
    const { typingType, typingId } = args;
    const { request } = useHttp();
    return request(
        `https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/categories/${typingType}/${typingId}.json`
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
