import React from 'react'

type Props = {
  width?: string
  height?: string
  fill?: string
  className?: string
}

export const ProfileIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='16'
      height='16'
      fill='currentColor'
      viewBox='0 0 24 24'
      {...props}
    >
      <path
        fillRule='evenodd'
        d='M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zm7.5 3a3 3 0 116 0 3 3 0 01-6 0zm-13.5 0a3 3 0 116 0 3 3 0 01-6 0zm4.06 5.367A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75a12.69 12.69 0 01-6.337-1.684.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z'
        clipRule='evenodd'
      />
      <path d='M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zm15.144 5.135a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z' />
    </svg>
  )
}
