import { useAuth } from '@/hooks/useAuth'
import { ProtectedLayout } from '@/layouts/ProtectedLayout'

const index = () => {
  const { onLogout } = useAuth()

  const handleLogout = () => {
    onLogout()
  }

  return (
    <ProtectedLayout>
      <h1>Home</h1>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </ProtectedLayout>
  )
}

export default index
