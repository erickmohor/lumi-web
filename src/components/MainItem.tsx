import { ElementType } from 'react'


interface HeaderProps {
  title: string,
  subtitle: string,
  icon: ElementType,
  iconColor?: string,
}

export function MainItem({ title, subtitle, icon: Icon, iconColor }: HeaderProps) {
  return (
    <div className="w-80 min-h-[200px] m-auto p-4 flex flex-col justify-start bg-gray-700 border-2 border-gray-600 rounded-lg overflow-hidden">

      <div className='w-16 flex justify-center items-center bg-gray-600 p-4 border-0 rounded-full'>
        <Icon size={28} color={iconColor ?? '#e1e1e1'} />
      </div>

      <h1 className="mt-6 ml-2 text-gray-200 text-2xl">
        {subtitle}
      </h1>

      <h2 className="mt-2 ml-2 text-gray-300 text-lg">
        {title}
      </h2>

    </div>
  )
}