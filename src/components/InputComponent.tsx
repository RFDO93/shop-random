import { FC } from 'react'

import { InputComponentProps } from './interface/InputComponentPropsInterface'

const InputComponent: FC<InputComponentProps> = (props) => {
  const { name, placeholder, label, register, validation, typeInput, errors } =
    props

  const validationValue = validation || {}

  return (
    <div className='flex flex-col w-full items-start gap-1 relative'>
      <label htmlFor='id' className='color-[#9FA2B4] font-bold text-xs'>
        {`${label ? label.toUpperCase() : ''}`}
      </label>
      <input
        className={`w-full h-11 rounded-lg border px-5 ${
          errors ? 'border-red-400' : 'border-[#F0F1F7]'
        } `}
        placeholder={placeholder}
        {...register(name, validationValue)}
        type={typeInput || 'text'}
      />
      {errors && (
        <span className='ml-6 text-red-400 font-bold text-xs absolute -bottom-[18px]'>
          {errors.message
            ? errors.message
            : !errors.message &&
              errors.type === 'email' &&
              'El Correo ingresado no tiene un formato adecuado.'}
        </span>
      )}
    </div>
  )
}

export default InputComponent
