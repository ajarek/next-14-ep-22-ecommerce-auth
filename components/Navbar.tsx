'use client'

import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Image from 'next/image'
import { ModeToggle } from './mode-toggle'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    // { href: '/login', label: 'Login' },
  ]
  const { theme, setTheme } = useTheme()
  return (
    <>
      <header className='  max-w-[1440px] mx-auto z-10 w-full'>
        <nav className='h-24 flex justify-between items-center max-container  px-12 py-2'>
          <div>
            <Link
              href='/'
              className='text-3xl font-bold'
            >
              {theme === 'dark' ? (
                <Image
                  src={'/logo-white.svg'}
                  alt='icon'
                  width={170}
                  height={28}
                />
              ) : (
                <Image
                  src={'/logo-black.svg'}
                  alt='icon'
                  width={170}
                  height={28}
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
            <Link
              href={'/login'}
              className='font-montserrat leading-normal bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md'
            >
              Login
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
                width={40}
                height={40}
              />
            ) : (
              <Image
                src={
                  theme === 'dark'
                    ? '/assets/icons/menu-white.svg'
                    : '/assets/icons/menu.svg'
                }
                alt='icon'
                width={40}
                height={40}
              />
            )}
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className='flex justify-end'>
          <ul className='absolute w-1/4 lg:hidden flex flex-col items-end justify-start  p-4 gap-6 '>
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
            <Link
              href='/login'
              className='font-montserrat leading-normal text-lg   '
            >
              Login
            </Link>

            <ModeToggle />
          </ul>
        </div>
      )}
    </>
  )
}
export default Navbar
