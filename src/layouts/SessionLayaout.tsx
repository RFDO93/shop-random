import React, { ReactNode, useEffect } from 'react'
import Router from 'next/router'
import LoadingPage from '@/components/LoadingPage'
import { useAuth } from '@/hooks/useAuth'

interface Props {
  children?: ReactNode
  // any props that come into the component
}

export const SessionLayout = ({ children }: Props) => {
  const { status } = useAuth()

  useEffect(() => {
    if (status === 'authenticated') Router.replace('/admin')
  }, [status])

  if (status !== 'unauthenticated') return <LoadingPage />

  return <>{children}</>
}
