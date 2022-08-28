import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const getCandies = createAsyncThunk('candies/fetchCandies', () => {
    return axios
        .get('/api/candies')
        .then((res) => {
            return res.data
        })
})

const candiesSlice = createSlice({
    name: 'candies',
    initialState: {
        loading: false,
        candies: [],
        error: ''
    },
    extraReducers: {
        [getCandies.pending]: (state) => {
            state.loading = true
        },
        [getCandies.fulfilled]: (state, action) => {
            state.loading = false
            state.candies = action.payload
        },
        [getCandies.rejected]: (state) => {
            state.loading = false
        }    
    }
})

export default candiesSlice.reducer
