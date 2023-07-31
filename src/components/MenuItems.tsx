import { AnchorHTMLAttributes, ElementType } from 'react'
import Link from 'next/link'


interface MenuItemsProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ElementType,
  label: string,
  url: string,
  isCollapsed?: boolean,
  isActive?: boolean
}

export function MenuItems({ icon: Icon, label, url, isCollapsed = false, isActive = false, ...rest }: MenuItemsProps) {

  return (
    <li className='mb-5'>
      <Link
        href={url ?? '/'}
        className={`flex items-center text-sm text-gray-200 hover:text-gray-100 gap-2 p-2 ${isActive && 'bg-green-700 rounded-md'} hover:bg-green-700 rounded-md`}
        {...rest}
      >
        <Icon size={24} />
        {!isCollapsed && label}
      </Link>
    </li>
  )
}