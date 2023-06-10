import { LoginRequestInterface } from '@/interface/request/LoginRequestInterface'
import { signIn, signOut, useSession } from 'next-auth/react'

const useAuth = () => {
  const { status, data } = useSession()

  const onLogin = async (LoginRequest: LoginRequestInterface) => {
    await signIn('credentials', {
      email: LoginRequest.email,
      password: LoginRequest.password,
      redirect: false
    })
  }

  const onLogout = async () => {
    await signOut({ redirect: false, callbackUrl: '/auth/login' })
  }

  return {
    // Variable
    status,
    user: data,
    // Funciones
    onLogin,
    onLogout
  }
}

export { useAuth }
