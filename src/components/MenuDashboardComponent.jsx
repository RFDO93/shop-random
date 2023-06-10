import { listMenu } from '@/constants/menu'
import { ItemNavBarComponent } from './ItemNavBarComponent'
import { IconsComponent } from './IconsComponent'
import { useAuth } from '@/hooks/useAuth'

export const MenuDashboardComponent = () => {
  const { onLogout } = useAuth()
  return (
    <nav>
      <ul>
        {listMenu.map((routeObj, index) => {
          const isSeparator = !routeObj.path

          if (isSeparator) {
            return (<div key={`separator-${index}`} className=' w-full h-px bg-[#DFE0EB] my-6 ' />)
          }

          return (
            <ItemNavBarComponent
              key={routeObj.path}
              title={routeObj.name}
              icon={routeObj.icon}
              route={routeObj.path}
            />
          )
        })}
        <li onClick={onLogout} className='flex flex-row pl-4 items-center gap-4 w-full  min-h-[3.5rem] relative font-normal cursor-pointer'>
          <IconsComponent
            width='20'
            height='20'
            icon='logout'
            fill='#9FA2B4'
          />
          <p className='text-[#A4A6B3] flex-1'>Cerrar Sesión</p>
        </li>
      </ul>
    </nav>
  )
}
