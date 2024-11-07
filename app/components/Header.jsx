'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import NavLink from './NavLink'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const links = [
    {
      href: '/',
      link: 'Home',
    },
    {
      href: '#contact-me',
      link: 'Contact Me',
    },
    {
      href: '#services',
      link: 'Services',
    },
    {
      href: '#sample-works',
      link: 'Sample works',
    },
    {
      href: '#client-reviews',
      link: 'Client Reviews',
    },
  ]

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="container fixed left-1/2 top-0 z-50 mx-auto -translate-x-1/2 sm:w-[96%]">
      <div className="hidden h-5 bg-transparent bg-opacity-30 backdrop-blur-lg sm:block"></div>
      <div className="flex w-full items-center justify-between bg-white px-3 py-3 shadow-md sm:rounded-lg sm:px-5">
        <Link href={'/'} className="logo text-lg sm:text-xl">
          <span className="font-bold text-orange-500">Saiful</span>{' '}
          <span className="font-medium">Digital</span>
        </Link>
        <nav
          className={`nav md:flex ${isMenuOpen ? 'fixed right-0 top-[52px] h-max w-full gap-y-3 rounded-lg bg-gray-100 p-5 shadow-lg sm:top-[60px] md:static md:w-auto md:bg-transparent md:p-0 md:shadow-none' : 'hidden'} md:items-center`}
        >
          <ul
            className={`flex flex-col md:flex-row md:items-center md:gap-x-10 ${isMenuOpen && 'gap-y-4'}`}
          >
            {links.map((item, index) => (
              <NavLink
                key={index}
                href={item.href}
                link={item.link}
                setIsMenuOpen={setIsMenuOpen}
              />
            ))}
            <li className="">
              <Link
                href={'#message-me'}
                className="block w-max rounded-md bg-orange-500 px-5 py-2 font-medium text-white hover:bg-orange-600"
                onClick={() => setIsMenuOpen(false)}
              >
                Message
              </Link>
            </li>
          </ul>
        </nav>
        <div className="icon block md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <FaTimes className="text-xl" />
            ) : (
              <FaBars className="text-xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
