import { RouteActiveInterface } from '@/interface/UiInterface'

export const listMenu: RouteActiveInterface[] = [
  {
    name: 'Dashboard',
    path: '/admin',
    icon: 'graphic'
  },
  // Si esta vació es un separador
  {
    name: '',
    path: '',
    icon: ''
  },
  {
    name: 'Usuarios',
    path: '/admin/user',
    icon: 'user'
  },
  {
    name: 'Perfiles',
    path: '/admin/profile',
    icon: 'profile'
  },
  {
    name: 'Permisos',
    path: '/admin/permission',
    icon: 'monitor'
  },
  {
    name: 'Configuraciones',
    path: '/admin/setting',
    icon: 'setting'
  }
]
