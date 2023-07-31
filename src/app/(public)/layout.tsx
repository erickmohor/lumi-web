import { Roboto_Flex as Roboto } from 'next/font/google'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <div className={`${roboto.variable}`}>
      {children}
    </div>
  )
}