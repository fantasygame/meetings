'use client'

import { UserCard } from '@/app/UserCard'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function Login() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <UserCard user={session?.user} />
        <button onClick={() => { signOut() }} className='btn ml-5'>Sign out</button>
      </>
    )
  } else {
    return (
      <><button onClick={() => { signIn() }} className='btn ml-5'>Sign in with Discord</button></>
    )
  }

}