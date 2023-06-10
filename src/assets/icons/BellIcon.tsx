import React from 'react'

type Props = {
  width?: string
  height?: string
  fill?: string
  className?: string
}

export const BellIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='18'
      height='19'
      fill='none'
      {...props}
    >
      <path
        fill={props.fill || '#9FA2B4'}
        d='M8 19a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2Zm6.73-4.678c-.603-.65-1.732-1.625-1.732-4.822 0-2.428-1.703-4.372-3.999-4.849V4a1 1 0 1 0-1.998 0v.651c-2.296.477-3.999 2.42-3.999 4.849 0 3.197-1.13 4.173-1.733 4.822A.976.976 0 0 0 1 15a1 1 0 0 0 1.003 1h11.994A1 1 0 0 0 15 15a.976.976 0 0 0-.27-.678Z'
      />
    </svg>
  )
}
