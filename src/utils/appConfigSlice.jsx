import { createSlice } from '@reduxjs/toolkit'

const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState: { lang: 'en' },
  reducers: {
    changeLang(state, action) {
      state.lang = action.payload
    }
  }
})
export const { changeLang } = appConfigSlice.actions
export default appConfigSlice.reducer
