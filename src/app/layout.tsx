import './globals.css'

import type { Metadata } from 'next'
import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'Lumi',
  description: 'Software para gestão de créditos de energia',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} bg-gradient-to-br from-gray-900 to-gray-700 font-sans text-gray-100 h-screen flex flex-row justify-start`}>
        {children}
      </body>
    </html>
  )
}