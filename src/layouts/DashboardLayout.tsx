import React from 'react'
import { AsideComponent } from '@/components/AsideComponent'
import { NavbarHeaderComponent } from '@/components/NavbarHeaderComponents'

type Props = {
  children: React.ReactNode
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className='flex flex-row'>
      <AsideComponent />
      <div className='flex flex-col py-7 px-6 w-full h-screen gap-9'>
        <NavbarHeaderComponent />
        {children}
      </div>
    </div>
  )
}
