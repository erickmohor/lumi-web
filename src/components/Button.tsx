import { ButtonHTMLAttributes } from 'react'

import { Loading } from './Loading'


type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string,
  loading?: boolean,
  variant?: 'primary' | 'secondary'
}

export function Button({ name, loading = false, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <button
      className={`${loading ? 'w-24' : ''} ${variant === 'primary' ? 'bg-green-700 border-2 border-green-500 hover:border-green-600' : 'bg-gray-700 border-2 border-gray-500 hover:border-gray-600'} text-lg text-white font-bold py-3 px-6 my-5 rounded-full`}
      {...rest}
    >
      {loading ? <Loading size='sm' /> : name}
    </button>
  )
}