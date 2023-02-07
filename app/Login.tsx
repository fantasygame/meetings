'use client'

import { useSession, signIn, signOut } from 'next-auth/react'
import { useState } from 'react';

export default function Login() {
  const { data: session } = useSession()

  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen)
  }

  const image = session?.user?.image || 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'

  return (
    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
      <div className="relative ml-3">
        <div>
          <button type="button" onClick={() => { handleProfileClick() }} className="flex rounded-full bg-gray-800 text-sm" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
            <span className="sr-only">Open user menu</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="h-8 w-8 rounded-full" src={image} alt="" />
          </button>
        </div>

        {isProfileOpen && <div className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button">
          {session && <div className="block px-4 py-2 text-sm text-gray-700">Hi <span className="font-bold	">{session?.user?.name}</span>!</div>}
          {session && <a onClick={() => { signOut() }} href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign out</a>}
          {!session && <a onClick={() => { signIn() }} href="#" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" id="user-menu-item-2">Sign in</a>}
        </div>}
      </div>
    </div>
  )
}