import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

export type Slide = {
    sliderPhoto: string;
    id: number;
    type: string;
    name: string;
};

interface SliderInitialState {
    sliderLoadingStatus: string;
    slider: Slide[];
}

const initialState: SliderInitialState = {
    sliderLoadingStatus: "idle",
    slider: [],
};

export const fetchedSlider = createAsyncThunk<Slide[]>(
    "slider/fetchedSlider",
    () => {
        const { request } = useHttp();
        return request(
            `https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/slider.json`
        );
    }
);

const newsSlice = createSlice({
    name: "slider",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchedSlider.pending, (state) => {
                state.sliderLoadingStatus = "loading";
            })
            .addCase(fetchedSlider.fulfilled, (state, action) => {
                state.sliderLoadingStatus = "idle";
                state.slider = action.payload;
            })
            .addCase(fetchedSlider.rejected, (state) => {
                state.sliderLoadingStatus = "error";
            })
            .addDefaultCase(() => {});
    },
});

const { actions, reducer } = newsSlice;

export default reducer;
