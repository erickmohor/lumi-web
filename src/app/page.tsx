'use client'
import { useEffect } from 'react'
import { parseCookies } from 'nookies'
import { redirect } from 'next/navigation'


export default function Home() {
  const { 'token': token } = parseCookies()

  useEffect(() => {
    if (token) {
      redirect('/dashboard')
    } else {
      redirect('/login')

    }
  }, [token])

  return (
    <>
    </>
  )
}