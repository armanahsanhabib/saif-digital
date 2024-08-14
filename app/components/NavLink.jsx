'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavLink = ({ href, link, setIsMenuOpen }) => {
  const path = usePathname()

  return (
    <li>
      <Link
        className={clsx('font-medium', { 'text-amber-600': href === path })}
        href={href}
        onClick={() => setIsMenuOpen(false)}
      >
        {link}
      </Link>
    </li>
  )
}

export default NavLink
