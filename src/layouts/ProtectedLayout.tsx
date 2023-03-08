import React, { ReactNode, useEffect } from 'react'
import Router from 'next/router'
import LoadingPage from '@/components/LoadingPage'
import { useAuth } from '@/hooks/useAuth'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export const ProtectedLayout = ({ children }: Props) => {
  const { status } = useAuth()

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/auth/login')
  }, [status])

  if (status !== 'authenticated') return <LoadingPage />

  return (
    <>
      <h1>EL dashboard</h1>
      {children}
    </>
  )
}
