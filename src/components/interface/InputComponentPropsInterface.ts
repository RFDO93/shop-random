import { FieldError } from 'react-hook-form'

interface InputComponentProps {
  name: string
  placeholder: string
  label: string
  register: Function
  validation?: Object
  typeInput?: string
  errors?: FieldError
}

export type { InputComponentProps }
