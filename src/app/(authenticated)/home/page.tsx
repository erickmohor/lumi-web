'use client'
import { ReactNode, useState } from 'react'

import { Sidebar } from '@/components/Sidebar'


interface HomeProps {
  children: ReactNode
}

export default function Home({ children }: HomeProps) {
  const [toggleCollapse, setToggleCollapse] = useState(false)

  return (
    <div className='h-screen w-screen'>
      <aside
        className={`h-screen ${toggleCollapse ? 'w-20' : 'w-40'} fixed text-black px-4 pt-4 bg-gradient-to-b from-green-500 to-green-700 flex justify-start flex-col`}
        style={{ transition: 'width 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
      >
        <Sidebar
          toggleCollapse={toggleCollapse}
          onClickMenu={() => setToggleCollapse(!toggleCollapse)}
        />
      </aside>

      <main
        className={`h-full flex flex-1 text-white ${toggleCollapse ? 'pl-24' : 'pl-44'}`}
        style={{ transition: 'padding 300ms cubic-bezier(0.2, 0, 0, 1) 0s' }}
      >
        {children}
      </main>
    </div>
  )
}