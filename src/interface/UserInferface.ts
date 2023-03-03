import { Person } from './PersonaInterface'
import { Profile } from './ProfileInterface'

interface User {
  id: number
  email: string
  password: string
  avatar?: string
  lastEntryDate?: Date
  Profile: Profile
  ProfileId: number
  Person: Person[]
}

interface UserResponse {
  email: string
  avatar?: string
  Profile: Profile
  Person: Person[]
}

export type { User, UserResponse }
