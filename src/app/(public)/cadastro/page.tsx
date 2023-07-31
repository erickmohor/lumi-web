'use client'
import { FormEvent, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { api } from '@/lib/api'
import { Input } from '@/components/Input'
import { Button } from '@/components/Button'

import lumiLogo from '@/assets/logo.svg'


export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  async function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    setErrorMessage('')
    setSuccessMessage('')

    if (!email || !password || !name) {
      return setErrorMessage('Preencha os campos para se cadastrar')
    }

    setIsLoading(true)

    try {
      const response = await api.post('/user/register', {
        name,
        email,
        password
      })

      if (response.status === 201) {
        setSuccessMessage('Cadastro efetuado com sucesso!')
      }

    } catch (error: any) {
      console.log(error)

      if (error?.response?.data?.message == 'E-mail already exists.') {
        return setErrorMessage('E-mail já cadastrado')
      }

      setErrorMessage('Erro ao se cadastrar')
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
          onSubmit={handleSignUp}
        >

          <Input
            type='name'
            label='Nome:'
            placeholder='Digite aqui o seu nome'
            errorMessage='a'
            onChange={(e) => setName(e.target.value)}
          />

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

          {successMessage && <span className='text-green-400'>{successMessage}</span>}

          <Button name={'Cadastrar'} type='submit' loading={isLoading} disabled={isLoading} />
        </form>

        <Link
          className="text-md text-gray-200 hover:text-gray-300 cursor-pointer"
          href='/'>
          Voltar
        </Link>

      </div>
    </div>
  )
}