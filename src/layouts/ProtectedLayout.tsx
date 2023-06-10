import React, { ReactNode, useEffect } from 'react'
import Router from 'next/router'
import LoadingPage from '@/components/LoadingPage'
import { useAuth } from '@/hooks/useAuth'
import { DashboardLayout } from './DashboardLayout'

interface Props {
  isStyleDashboard?: boolean
  children?: ReactNode
  // any props that come into the component
}

export const ProtectedLayout = ({
  isStyleDashboard = true,
  children
}: Props) => {
  const { status } = useAuth()

  useEffect(() => {
    if (status === 'unauthenticated') Router.replace('/auth/login')
  }, [status])

  if (status !== 'authenticated') return <LoadingPage />

  if (!isStyleDashboard) return <>{children}</>

  return <DashboardLayout>{children}</DashboardLayout>
}
