import { createSlice } from '@reduxjs/toolkit'
// import { HYDRATE } from 'next-redux-wrapper'

const initState = {
    loginProvider: null,
    loginStatus: false,
    userId: null,
    userEmail: null,
    fullName: null,
    avatarURL: null,
    authToken: null,
}

const statusSlice = createSlice({
    name: 'status',
    initialState: initState,
    reducers: {
        setLoginStatus: (state, { payload }) => {
            state.loginStatus = payload
        },
        setUserId: (state, { payload }) => {
            state.userId = payload
        },
        setUserEmail: (state, { payload }) => {
            state.userEmail = payload
        },
        setUserName: (state, { payload }) => {
            state.fullName = payload
        },
        setAvatarURL: (state, { payload }) => {
            state.avatarURL = payload
        },
        setLoginProvider: (state, { payload }) => {
            state.loginProvider = payload
        },
        setAuthToken: (state, { payload }) => {
            state.authToken = payload
        },
        // extraReducers: {
        //     [HYDRATE]: (state, action) => {
        //         return {
        //             ...state,
        //             ...action.payload.status,
        //         };
        //     },
        // }
    }
})

export const { setLoginStatus, setUserId, setUserEmail, setUserName, setAvatarURL, setLoginProvider, setAuthToken } = statusSlice.actions;

export const statusReducer = statusSlice.reducer;