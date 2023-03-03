import { LoginRequestInterface } from '@/interface/request/LoginRequestInterface'
import { useAppDispatch } from '@/store/store'
import { loginRequest } from '@/store/thunks/authThunks'

const useAuth = () => {
  const dispatch = useAppDispatch()

  const onLogin = async (LoginRequest: LoginRequestInterface) => {
    await dispatch(loginRequest(LoginRequest))
  }

  return {
    // Variable

    // Funciones
    onLogin
  }
}

export { useAuth }
