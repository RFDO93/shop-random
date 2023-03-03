import { SubmitHandler, useForm } from 'react-hook-form'
import InputComponent from '../../components/InputComponent'
import { LoginRequestInterface } from '@/interface/request/LoginRequestInterface'
import { useAuth } from '@/hooks/useAuth'

const isValidEmail = (email = '') =>
  // eslint-disable-next-line no-useless-escape
  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )

const login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm<LoginRequestInterface>()

  const { onLogin } = useAuth()

  const handleEmailValidation = (email: string) => isValidEmail(email)

  const onSubmit: SubmitHandler<LoginRequestInterface> = (data) => {
    console.log(data)
    onLogin(data)
  }

  return (
    <section className='flex justify-center items-center h-[100vh] bg-[#363740]'>
      <div className=' w-96 min-h-[60%] rounded-lg bg-white flex flex-col justify-center items-center p-5'>
        <div className='flex items-center flex-col gap-1'>
          <img src='/shop.svg' className=' w-10 h-10' />
          <p className='text-[#A4A6B3] text-lg font-bold'>Shop Random</p>
        </div>
        <div className='flex items-center flex-col mt-4'>
          <p className='text-xl font-bold'>Inicio de sesión del dashboard</p>
          <p className='text-sm font-normal'>
            Ingrese su correo y contraseña a continuación
          </p>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className='w-full mt-12 gap-6 flex flex-col'
        >
          <InputComponent
            label='Correo Electrónico'
            name='email'
            placeholder='Correo'
            register={register}
            validation={{
              required: 'El campo email es obligatorio',
              validate: {
                email: handleEmailValidation
              }
            }}
            typeInput='email'
            errors={errors.email}
          />
          <InputComponent
            label='Contraseña'
            name='password'
            placeholder='Contraseña'
            register={register}
            validation={{
              required: 'El campo Contraseña es obligatorio',
              minLength: {
                value: 6,
                message: 'El campo Contraseña tiene que ser mayor que 6.'
              }
            }}
            typeInput='password'
            errors={errors.password}
          />

          <button
            className='w-full p-4 rounded-lg mt-8 bg-[#3751FF] text-white'
            type='submit'
          >
            Ingresar
          </button>
        </form>
      </div>
    </section>
  )
}

export default login
