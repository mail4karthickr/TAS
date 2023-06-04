import { createSlice } from "@reduxjs/toolkit";
import { Theme, allThemes } from "./themes";

const initialState = {
    themes: allThemes,
    currentTheme: allThemes[Theme.Ocean]
}

const themeSlice = createSlice({
    name: 'theme',
    initialState:initialState,
    reducers: {
        updateTheme(state, action) {
            const { theme } = action.payload
            state.currentTheme = theme;
        }
    }
});

export default themeSlice.reducer
export const { updateTheme } = themeSlice.actions;