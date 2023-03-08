import { LoginRequestInterface } from '@/interface/request/LoginRequestInterface'
import { useAppDispatch } from '@/store/store'
import { signIn, signOut, useSession } from 'next-auth/react'

const useAuth = () => {
  const dispatch = useAppDispatch()
  const { status, data } = useSession()

  const onLogin = async (LoginRequest: LoginRequestInterface) => {
    const user = await signIn('credentials', {
      email: LoginRequest.email,
      password: LoginRequest.password,
      redirect: false
    })

    //console.log(user)
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
