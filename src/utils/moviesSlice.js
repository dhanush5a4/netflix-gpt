import { createSlice } from "@reduxjs/toolkit";

const moviesSlice= createSlice({
    name: "movies",
    initialState: {
        movies:null,
        trailer:null,
        popular:null,
        toprated:null,
        upcoming:null,
    },
    reducers: {
        addMovie: (state, action) => {
            state.movies= action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popular= action.payload;
        },
        addTopratedMovies: (state, action) => {
            state.toprated= action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.upcoming= action.payload;
        },
        addTrailer: (state, action) => {
            state.trailer= action.payload;
    },
}
})

export const {addMovie,addTrailer,addPopularMovies,addTopratedMovies,addUpcomingMovies} =moviesSlice.actions;
export default moviesSlice.reducer;