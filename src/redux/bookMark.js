import { createSlice } from '@reduxjs/toolkit'

const marked = true
const initialState = { marked }
const markSlice = createSlice({
    name: 'bookmark',
    initialState,
    reducers: {
        setMarked: (state, action) => {
            state.marked = action.payload;
        }
    }
})

export const selectMarked = (state) => state.bookmark.marked

export const { setMarked } = markSlice.actions

export default markSlice.reducer