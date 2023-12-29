'use client'

import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'
import { signOut, useSession } from 'next-auth/react'
import { Button } from './ui/button'
import { fetchStorage } from '@/utils/localStorage'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    // { href: '/login', label: 'Login' },
  ]
  const { theme, setTheme } = useTheme()
  const { data: session }: any = useSession()
  const len =fetchStorage('Products').length
  return (
    <>
      <header className='  max-w-[1440px] mx-auto z-10 w-full'>
        <nav className='h-24 flex justify-between items-center max-container  px-12 py-2 border-b-2'>
          <div>
            <Link
              href='/'
              className='text-3xl font-bold'
            >
              {theme === 'dark' ? (
                <Image
                  src={'/logo-white.svg'}
                  alt='icon'
                  width={180}
                  height={30}
                />
              ) : (
                <Image
                  src={'/logo-black.svg'}
                  alt='icon'
                  width={180}
                  height={30}
                />
              )}
            </Link>
          </div>

          <ul className=' flex justify-center items-center gap-16 max-lg:hidden mr-16 max-lg:mr-0'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {!session ? (
              <Link
                href={'/login'}
                className='font-montserrat leading-normal bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md'
              >
                Login
              </Link>
            ) : (
              <Button
                onClick={() => {
                  signOut()
                }}
                className='p-2 px-5   rounded-sm'
              >
                Logout
              </Button>
            )}

            <Link
              href='/cart'
              className='flex'
            >
              {theme === 'dark' ? (
                <>
                  <Image
                    src={'/assets/icons/cart.svg'}
                    alt='icon'
                    width={40}
                    height={40}
                    className='bg-white rounded-sm mr-2'
                  />
                  <sup className='text-xl'>{len}</sup>
                </>
              ) : (
                <>
                <Image
                  src={'/assets/icons/cart.svg'}
                  alt='icon'
                  width={40}
                  height={40}
                />
                <sup className='text-xl'>{len}</sup>
                </>
              )}
            </Link>
            <ModeToggle />
          </ul>

          <div
            className='hidden max-lg:block cursor-pointer'
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            {isMenuOpen ? (
              <Image
                src={
                  theme === 'dark'
                    ? '/assets/icons/close-white.svg'
                    : '/assets/icons/close.svg'
                }
                alt='icon'
                width={24}
                height={24}
              />
            ) : (
              <Image
                src={
                  theme === 'dark'
                    ? '/assets/icons/menu-white.svg'
                    : '/assets/icons/menu.svg'
                }
                alt='icon'
                width={25}
                height={24}
              />
            )}
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className='flex justify-end border-2'>
          <ul className='absolute w-1/4 lg:hidden flex flex-col items-start justify-start  p-4 gap-6 border-2 '>
            {navLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className='font-montserrat leading-normal text-lg    '
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {!session ? (
              <Link
                href={'/login'}
                className='font-montserrat leading-normal bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md'
              >
                Login
              </Link>
            ) : (
              <Button
                onClick={() => {
                  signOut()
                }}
                className='p-2 px-5   rounded-sm'
              >
                Logout
              </Button>
            )}

            <ModeToggle />
          </ul>
        </div>
      )}
    </>
  )
}
export default Navbar
