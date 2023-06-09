const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    user: {name: null, email: null},
    token: null,
    isLoggedIn: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState, 
    extraReducers: {}
});

export const authReducer = authSlice.reducer;