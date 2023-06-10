import React, { useEffect } from 'react'
import { AsideComponent } from '@/components/AsideComponent'
import { NavbarHeaderComponent } from '@/components/NavbarHeaderComponents'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { listMenu } from '@/constants/menu'
import { setRouteActive } from '@/store/ui/uiSlice'

type Props = {
  children: React.ReactNode
}

export const DashboardLayout: React.FC<Props> = ({ children }) => {
  const { asPath } = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    handleActiveItem(asPath)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asPath])

  const handleActiveItem = (path: string) => {
    const getRoute = listMenu.find((item) => item.path === path)
    if (getRoute) {
      dispatch(setRouteActive(getRoute))
    }
  }

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
