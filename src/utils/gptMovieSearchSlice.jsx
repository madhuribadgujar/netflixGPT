import { createSlice } from '@reduxjs/toolkit'

const gptMovieSearchSlice = createSlice({
  name: 'gptMovieSearch',
  initialState: {
    gptMovies: null,
    movieNames: null,
    movieResults: null
  },
  reducers: {
    setGptMovieSearch: (state, action) => {
      const { movieNames, movieResults } = action.payload
      state.movieNames = movieNames
      state.movieResults = movieResults
    }
  }
})

export const { setGptMovieSearch } = gptMovieSearchSlice.actions

export default gptMovieSearchSlice.reducer
