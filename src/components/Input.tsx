import { InputHTMLAttributes, forwardRef } from 'react'


type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string,
  placeholder?: string,
  errorMessage?: string,
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input({ label, placeholder, errorMessage, ...rest }: InputProps, ref) {

    return (
      <div className='w-full m-2'>
        <div className="w-full p-2">
          <label className="block uppercase tracking-wide text-green-500 text-xs font-bold mb-2">
            {label.toUpperCase()}
          </label>
          <input
            className="appearance-none block w-full bg-gray-700 text-gray-400 border border-gray-600 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-700 focus:border-green-500"
            id={label.toUpperCase()}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
        </div>
      </div>
    )
  }

)