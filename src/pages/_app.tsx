import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import { SessionProvider } from 'next-auth/react'
import { store } from '@/store/store'

import { Mulish } from '@next/font/google'

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <SessionProvider session={pageProps.session}>
        <main className={`${mulish.variable} font-sans`}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </Provider>
  )
}
