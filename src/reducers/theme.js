import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: 'dark_themes',
}

export const themeSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            console.log(action)
            state.value = action.payload
        },

    },
})

// Action creators are generated for each case reducer function
export const { changeTheme } = themeSlice.actions

export default themeSlice.reducer