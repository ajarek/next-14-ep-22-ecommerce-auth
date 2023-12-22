'use client'

import React, { useState } from 'react'
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/shop', label: 'Shop' },
    { href: '/login', label: 'Login' },
  ]
  return (
    <>
      <header className='  max-w-[1440px] mx-auto z-10 w-full'>
        <nav className='h-24 flex justify-between items-center max-container  px-8 py-2'>
          <div>

          <a
            href='/'
            className='text-3xl font-bold'
          >
            Logo
          </a>
          </div>

          <ul className=' flex justify-center items-center gap-16 max-lg:hidden mr-16 max-lg:mr-0'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div
            className='hidden max-lg:block cursor-pointer'
            onClick={() => {
              setIsMenuOpen(!isMenuOpen)
            }}
          >
            {isMenuOpen ? '❌' : '🟰'}
          </div>
        </nav>
      </header>
      {isMenuOpen && (
        <div className='flex justify-end'>
          <ul className='absolute w-1/4 lg:hidden flex flex-col items-end justify-start  p-4 gap-6  bg-white'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat leading-normal text-lg text-slate-gray'
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}
export default Navbar
