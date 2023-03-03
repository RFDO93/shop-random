import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: 'CONFIRM', // CONFIRM, AUTHENTICATED, NO-AUTHENTICATED
    user: {},
    token: null
  },
  reducers: {
    handleChecking: (state) => {
      //
      state.status = 'CONFIRM'
    },
    handleLogin: (state, { payload }) => {
      //
      state.status = 'AUTHENTICATED'
      state.user = payload.user
      state.token = payload.token
    },
    handleLogout: (state) => {
      //
      state.status = 'NO-AUTHENTICATED'
      state.user = {}
    }
  }
})

// Action creators are generated for each case reducer function
export const { handleChecking, handleLogin, handleLogout } = authSlice.actions
