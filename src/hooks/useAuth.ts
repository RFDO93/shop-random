import { LoginRequestInterface } from '@/interface/request/LoginRequestInterface'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useMemo } from 'react'
import Swal from 'sweetalert2'

const useAuth = () => {
  const { status, data } = useSession()

  const user = useMemo(() => data?.user, [data])

  const onLogin = async (LoginRequest: LoginRequestInterface) => {
    await signIn('credentials', {
      email: LoginRequest.email,
      password: LoginRequest.password,
      redirect: false
    })
  }

  const confirmLogout = async () => {
    await signOut({ redirect: false, callbackUrl: '/auth/login' })
  }

  const onLogout = () => {
    Swal.fire({
      title: '¿Estas seguro de cerrar sesión?',
      icon: 'warning',
      cancelButtonText: 'No',
      showCancelButton: true,
      confirmButtonText: 'Si'
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        confirmLogout()
      }
    })
  }

  return {
    // Variable
    status,
    user,
    // Funciones
    onLogin,
    onLogout
  }
}

export { useAuth }
