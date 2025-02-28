import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    populerMovies: null
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload
    },
    addPopulerMovies: (state, action) => {
      state.populerMovies = action.payload
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload
    }
  }
})

export const { addNowPlayingMovies, addTrailerVideo, addPopulerMovies } =
  movieSlice.actions

export default movieSlice.reducer
