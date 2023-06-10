import ListComponent from '@/components/ListComponent'
import { ProtectedLayout } from '@/layouts/ProtectedLayout'

const User = () => {
  return (
    <ProtectedLayout>
      <ListComponent />
    </ProtectedLayout>
  )
}

export default User
