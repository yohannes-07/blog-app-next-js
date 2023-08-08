'use client'

import { SafeUser } from '@/types/type'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

interface UserMenuProps {
    currentUser: SafeUser | null
  }


export default function Navbar({currentUser}:UserMenuProps) {


  return (
    <header>
         <nav className='bg-sky-600 flex text-white font-bold text-lg justify-center gap-48  px-4 py-3 shadow-xl'>
            <div>{currentUser?.name}</div>

            <div className='flex gap-4'>
              <Link href='/'>Home</Link>
              <Link href='/create'>Create</Link>
              {currentUser ? <button onClick={() => signOut()}>Sign out</button> : <Link href='/register'>Register</Link>}
            </div>
        </nav>
    </header>
  )
}