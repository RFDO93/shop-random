interface Person {
  id: number
  name: string
  lastName?: string
  phone: string[]
  birthDate?: Date
  gender: string
  typeDocument?: string
  identificationDocument?: string
  nationality?: string
}

export type { Person }
