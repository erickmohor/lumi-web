import { useMemo } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { usePathname } from 'next/navigation'
import { destroyCookie } from 'nookies'

import { Receipt, LayoutDashboard, Menu, LogOut } from 'lucide-react'

import { MenuItems } from './MenuItems'
import lumiLogo from '../assets/logo.svg'


const menuItems = [
  { id: 1, icon: LayoutDashboard, label: 'Dashboard', url: '/dashboard' },
  { id: 2, icon: Receipt, label: 'Faturas', url: '/faturas' },
]

interface SidebarProps {
  toggleCollapse: boolean,
  onClickMenu: () => void,
}

export function Sidebar({ toggleCollapse, onClickMenu }: SidebarProps) {
  const pathname = usePathname()

  const activeMenu = useMemo(() => menuItems.find(menu => menu.url === pathname), [pathname])

  return (
    <div>
      <button
        onClick={onClickMenu}
        className='pb-4 text-green-900'
      >
        <Menu size={32} />
      </button>

      <div className='flex justify-center items-center flex-col gap-10'>
        <Image
          src={lumiLogo}
          width='157'
          height='70'
          alt=''
          priority
        />

        <ul>
          <>
            {
              menuItems.map(menu => (
                <MenuItems
                  key={menu.id}
                  icon={menu.icon}
                  label={menu.label}
                  url={menu.url}
                  isCollapsed={toggleCollapse}
                  isActive={menu.id === activeMenu?.id}
                />
              ))
            }
            <MenuItems
              key='Sair'
              icon={LogOut}
              label='Sair'
              url='/'
              isCollapsed={toggleCollapse}
              onClick={() => {
                destroyCookie(undefined, 'token')
                Router.push('/')
              }
              }
            />
          </>
        </ul>
      </div>
    </div>
  )
}