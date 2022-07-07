import Ping from 'components/Button/Ping'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

import IconFingerPrint from 'assets/icons/finger_print'
import IconMenu from 'assets/icons/menu'
import IconX from 'assets/icons/x'
import { ClassCombiner } from 'utils/'

const MENU = [
  { name: "Home", link: "/", sub: [], disabled: false, hasBadge: false },
  { name: "Games", link: "/games", sub: [], disabled: false, hasBadge: true },
  { name: "Experience", link: "/experience", sub: [], disabled: true, hasBadge: false },
  { name: "Donate", link: "/donate", sub: [], disabled: false, hasBadge: false },
]

const Navbar = () => {
  const router = useRouter()
  const btnRef = useRef()
  const [isOpen, setIsOpen] = useState(false)

  const setupActive = (el) => {
    let isActive = router.pathname.indexOf(el.link) !== -1
    if (el.link === "/") {
      isActive = router.pathname === el.link
    }
    const elemActiveClass = `${isActive ? "opacity-100" : "opacity-75"}`
    return <li
      key={el.name}
      className={ClassCombiner(elemActiveClass, "hover:opacity-100")}
      onClick={() => setIsOpen(false)}
    >
      <Link href={el.link}>
        <span className="select-none cursor-pointer">
          {el.hasBadge ? <span className="inline-flex">
            {el.name}
            <Ping />
          </span> : el.name}
        </span>
      </Link>
    </li>
  }

  const handleClickOutside = e => {
    if (!btnRef.current?.contains(e.target)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  });

  return (
    <nav className="mx-10 px-6 rounded-b-md sticky top-0">
      <div className="flex justify-between items-center mx-auto px-2 md:px-0">
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            {IconFingerPrint}
            <span className="text-lg font-bold">WATSIZE</span>
          </div>
        </Link>
        <div className="w-full md:w-auto hidden md:flex justify-center items-center">
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            {MENU.filter(el => !el.disabled).map(setupActive)}
          </ul>
        </div>

        {/* MOBILE */}
        <div className="md:hidden">
          {/* Backdrop */}
          {isOpen && <div className="-z-10 absolute left-0 top-0 text-center bg-[rgba(0,0,0,0.5)] w-full h-full" />}
          {/* Button */}
          <div ref={btnRef}>
            <button
              type="button"
              className="z-20 relative p-2 text-white rounded-md focus:outline-none focus:ring-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? IconX : IconMenu}
            </button>
            {isOpen && <div className="absolute top-0 left-0 text-center w-full bg-medium-blue pt-8">
              <ul className="flex flex-col gap-6 py-6">
                {MENU.filter(el => !el.disabled).map(setupActive)}
              </ul>
            </div>}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
