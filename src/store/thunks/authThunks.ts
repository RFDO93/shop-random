import type { Dispatch, Store } from '@reduxjs/toolkit'
import { axios } from '@/fetchApi/axiosDashboard'
import { LoginRequestInterface } from '@/interface/request/LoginRequestInterface'
import { handleChecking, handleLogin, handleLogout } from '../authSlice'

const loginRequest = (LoginRequest: LoginRequestInterface) => {
  return async (dispatch: Dispatch, getState: Store) => {
    try {
      dispatch(handleChecking())

      const response = await axios.post('/auth/login', LoginRequest)
      const { data } = response

      if (!data?.status) {
        dispatch(handleLogout())
        return
      }

      dispatch(handleLogin(data))
    } catch (error) {
      console.log(error)
    }
  }
}

export { loginRequest }
