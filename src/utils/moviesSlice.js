import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name: "movies",
    initialState: {
        movies:null,
    },
    reducers: {
        addMovie: (state, action) => {
            state.movies= action.payload;
        }
    },
})

export const {addMovie} =moviesSlice.actions;
export default moviesSlice.reducer;