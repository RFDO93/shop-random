import React from 'react'

type Props = {
  width?: string
  height?: string
  fill?: string
  className?: string
}

export const GraphicIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='none'
      {...props}
    >
      <g>
        <path
          fill={props.fill || '#9FA2B4'}
          d='M15.523 8.941H8.544l4.648 4.648c.178.178.47.192.653.02a7.044 7.044 0 0 0 2.15-4.143.471.471 0 0 0-.472-.525Zm-.465-1.906A7.076 7.076 0 0 0 8.494.472.473.473 0 0 0 8 .948V7.53h6.582a.473.473 0 0 0 .476-.494Zm-8.47 1.906V1.962a.471.471 0 0 0-.524-.472 7.054 7.054 0 0 0-6.06 7.227c.128 3.769 3.373 6.86 7.144 6.812a7.004 7.004 0 0 0 3.978-1.295c.232-.165.248-.507.046-.708L6.588 8.94Z'
        />
      </g>
      <defs>
        <clipPath id='a'>
          <path fill='#fff' d='M0 0h16v16H0z' />
        </clipPath>
      </defs>
    </svg>
  )
}
