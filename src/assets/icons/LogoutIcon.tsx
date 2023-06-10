import React from 'react'

type Props = {
  width?: string
  height?: string
  fill?: string
  className?: string
}

export const LogoutIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='48'
      height='48'
      viewBox='0 -960 960 960'
      {...props}
    >
      <path d='M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h291v60H180v600h291v60H180zm486-185l-43-43 102-102H375v-60h348L621-612l43-43 176 176-174 174z' />
    </svg>
  )
}

export default LogoutIcon
