import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

const initialState = {
    sliderLoadingStatus: 'idle',
    slider: []
}

export const fetchedSlider = createAsyncThunk(
    'slider/fetchedSlider',
    () => {
        const { request } = useHttp();
        return request(`https://ezbroya-a0009-default-rtdb.europe-west1.firebasedatabase.app/slider.json`)
    }
)


const newsSlice = createSlice({
    name: 'slider',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(fetchedSlider.pending, state => {state.sliderLoadingStatus = 'loading'})
            .addCase(fetchedSlider.fulfilled, (state, action) => {
                state.slider = action.payload
            })
            .addCase(fetchedSlider.rejected, state => {state.sliderLoadingStatus = 'error'})
            .addDefaultCase(() => {})
    }
})

const {actions, reducer} = newsSlice;

export default reducer;

export const {
    sliderFetching, 
    sliderFetched,
    sliderError
} = actions;