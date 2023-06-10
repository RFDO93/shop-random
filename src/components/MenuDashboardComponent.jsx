import { ItemNavBarComponent } from './ItemNavBarComponent'

export const MenuDashboardComponent = () => {
  return (
    <nav>
      <ul>
        <ItemNavBarComponent
          title='Dashboard'
          icon='graphic'
          route='/admin'
          active
        />

        <div className=' w-full h-px bg-[#DFE0EB] my-6 ' />

        <ItemNavBarComponent
          title='Usuarios'
          icon='user'
          route='/admin/user'
        />

        <ItemNavBarComponent
          title='Perfiles'
          icon='profile'
          route='/admin/permission'
        />

        <ItemNavBarComponent
          title='Permisos'
          icon='monitor'
          route='/admin/profile'
        />

        <ItemNavBarComponent
          title='Configuraciones'
          icon='setting'
          route='/admin/setting'
        />
      </ul>
    </nav>
  )
}
