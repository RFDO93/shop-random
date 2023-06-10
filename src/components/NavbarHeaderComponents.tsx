import { BellIcon } from '@/assets/icons/BellIcon'
import Image from 'next/image'

export const NavbarHeaderComponent = () => {
  return (
    <nav className='w-full h-11 flex flex-row justify-between items-center'>
      <h2 className='font-bold text-2xl text-[#252733]'>Dashboard</h2>

      <div className='flex flex-row gap-3 place-items-center h-full'>
        <button
          className='button'
          onClick={() => {
            console.log('paso por aqui')
          }}
        >
          <BellIcon />
        </button>
        <div className='bg-[#DFE0EB] h-9 w-[1.5px] mx-6' />
        <p className=' font-semibold text-sm'>Richard Dorta</p>
        <div className=' w-[44px] h-[44px] rounded-full border-[#DFE0EB] border-solid border-2 overflow-hidden place-items-center'>
          <Image
            src='/perfil.png'
            width='40'
            height='40'
            alt='image avatar user'
          />
        </div>
      </div>
    </nav>
  )
}
