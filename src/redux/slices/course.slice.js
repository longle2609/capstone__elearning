import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    courses: [],
    currCourse: null,
};

export const courseSlice = createSlice({
    name: "courses",
    initialState,
    reducers: {
        handleSetCourses: (state, action) => {
            state.courses = action.payload;
        },
        handleSetCurrCourse: (state, action) => {
            state.currCourse = action.payload;
        },
    },
});

export const { handleSetCourses, handleSetCurrCourse } = courseSlice.actions;

export default courseSlice.reducer;