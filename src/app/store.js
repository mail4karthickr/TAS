import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice.js';
import candidatesReducer from '../features/dashBoard/slice/candidatesSlice.js';

export default configureStore({
    reducer: {
        theme: themeReducer,
        candidates: candidatesReducer
    }
});