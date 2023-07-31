import { cookies } from 'next/headers'
import { Roboto_Flex as Roboto } from 'next/font/google'

import Home from './home/page'
import SignIn from '../(public)/login/page'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const isAuthenticated = cookies().has('token')

  return (
    <>
      <title>Lumi - Dashboard</title>
      <div className={`${roboto.variable}`}>
        {
          isAuthenticated ?
            (
              <Home>
                {children}
              </Home>
            ) :
            <SignIn />
        }
      </div>
    </>
  )
}