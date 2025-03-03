import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import moviesReducer from './movieSlice'
import gptReducer from './gptSlice'
import appConfigReducer from './appConfigSlice'
import gptMovieSearchReducer from './gptMovieSearchSlice'

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    appConfig: appConfigReducer,
    gptMovieSearch: gptMovieSearchReducer
  }
})

export default appStore
