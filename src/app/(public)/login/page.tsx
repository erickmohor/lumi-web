'use client'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { setCookie } from 'nookies'
import { useRouter } from 'next/navigation'

import { api } from '@/lib/api'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

import lumiLogo from '@/assets/logo.svg'


export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()

  async function handleSignIn(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setErrorMessage('')
    setIsLoading(true)

    try {
      const { data } = await api.post('/user/auth', {
        email,
        password
      })

      if (data?.token) {
        setCookie(undefined, 'token', data.token, {
          maxAge: 60 * 60 * 24 * 30, // 30 days
        })
        api.defaults.headers['Authorization'] = `Bearer ${data.token}`
        router.push('/dashboard')
        router.refresh()
      }
    } catch (error: any) {
      console.log(error)

      setErrorMessage('Credencial inválida')
    } finally {
      setIsLoading(false)
    }

  }


  return (
    <div className='w-screen h-screen flex justify-center items-center bg-green-900'>
      <div className='w-[600px] h-[640px] flex flex-col items-center bg-gray-700 rounded-md border-2 border-gray-600'>
        <Image
          src={lumiLogo}
          width='157'
          height='70'
          alt=''
          className='my-10'
          priority
        />
        <form
          className='w-3/4 flex flex-col items-center m-1'
          onSubmit={handleSignIn}
        >
          <Input
            type='email'
            label='E-mail:'
            placeholder='Digite aqui o seu e-mail'
            errorMessage='a'
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input
            type='password'
            label='Senha:'
            placeholder='Digite aqui a sua senha'
            errorMessage='a'
            onChange={(e) => setPassword(e.target.value)}
          />

          {errorMessage && <span className='text-red-400'>{errorMessage}</span>}

          <Button name={'Entrar'} type='submit' loading={isLoading} disabled={isLoading} />
        </form>

        <Link
          className="text-md text-gray-200 hover:text-gray-300 cursor-pointer"
          href='/cadastro'
        >
          Não possui uma conta? Clique aqui.
        </Link>

      </div>
    </div>
  )
}
