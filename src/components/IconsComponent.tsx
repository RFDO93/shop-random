import { BellIcon } from '@/assets/icons/BellIcon'
import { GraphicIcon } from '@/assets/icons/GraphicIcon'
import { MonitorIcon } from '@/assets/icons/MonitorIcon'
import { ProfileIcon } from '@/assets/icons/ProfileIcon'
import { SettingIcon } from '@/assets/icons/SettingIcon'
import { UserIcon } from '@/assets/icons/UserIcon'
import { LogoutIcon } from '@/assets/icons/LogoutIcon'

type PropsIcon = {
  className?: string
  width?: string
  height?: string
  fill?: string
  icon: string
}

export const IconsComponent = (props: PropsIcon) => {
  if (props.icon === 'graphic') {
    return <GraphicIcon {...props} />
  }

  if (props.icon === 'monitor') {
    return <MonitorIcon {...props} />
  }

  if (props.icon === 'bell') {
    return <BellIcon {...props} />
  }

  if (props.icon === 'profile') {
    return <ProfileIcon {...props} />
  }

  if (props.icon === 'setting') {
    return <SettingIcon {...props} />
  }

  if (props.icon === 'user') {
    return <UserIcon {...props} />
  }

  if (props.icon === 'logout') {
    return <LogoutIcon {...props} />
  }

  return <></>
}
