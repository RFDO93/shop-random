import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { IconsComponent } from './IconsComponent'

type Props = {
  title: string
  icon: string
  active: boolean
  route: string
}

export const ItemNavBarComponent: React.FC<Props> = ({
  title,
  icon,
  route = ''
}) => {
  const { asPath } = useRouter()
  const isActive = asPath === route

  const classNameActiveItem = isActive ? 'bg-[#9FA2B416]' : ''
  const classNameActiveItemText = isActive ? 'text-[#DDE2FF]' : 'text-[#A4A6B3]'

  return (
    <li>
      <Link
        href={route}
        className={`flex flex-row pl-4 items-center gap-4 w-full  min-h-[3.5rem] relative font-normal cursor-pointer ${classNameActiveItem}`}
      >
        {isActive && (
          <div className='w-1  h-full bg-[#9FA2B4] absolute left-0 ' />
        )}
        <IconsComponent
          width='20'
          height='20'
          icon={icon}
          fill={isActive ? '#DDE2FF' : '#9FA2B4'}
        />
        <p className={` ${classNameActiveItemText} flex-1`}>{title}</p>
      </Link>
    </li>
  )
}
