import { createSlice } from '@reduxjs/toolkit'
// import { HYDRATE } from 'next-redux-wrapper'

const initState = {
    authToken: null,
    user: null,
    dumyReviewData: null,
    totalDummyReviewCount: 0,
}

const statusSlice = createSlice({
    name: 'status',
    initialState: initState,
    reducers: {
        setAuthToken: (state, { payload }) => {
            state.authToken = payload
        },
        setUser: (state, { payload }) => {
            state.user = payload
        },
        setDummyReviewData: (state, { payload }) => {
            state.dumyReviewData = payload
        },
        setTotalDummyReviewCount: (state, { payload }) => {
            state.totalDummyReviewCount = payload
        },
    }
})

export const { setAuthToken, setUser, setDummyReviewData, setTotalDummyReviewCount } = statusSlice.actions;

export const statusReducer = statusSlice.reducer;