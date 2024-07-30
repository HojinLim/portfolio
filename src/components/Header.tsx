import React, { useState, useEffect, CSSProperties, useMemo } from 'react'
import { scrollToSection, scrollToTop } from '../utils/scrollUtils'

import { useRecoilState } from 'recoil'
import { headerBtnShow } from 'src/atom/store'

type Props = {}

const navItem = [
  { id: 'about', title: 'About-Me' },
  { id: 'skills', title: 'Skills' },
  { id: 'archive', title: 'Archiving' },
  { id: 'projects', title: 'Projects' },
  { id: 'career', title: 'Career' }
]

const Header = (props: Props) => {
  const [showBackground, setShowBackground] = useState(false)
  const [headerButtonShow, setHeaderBtnShow] = useRecoilState(headerBtnShow)

  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = () => {
    const position = window.scrollY

    if (position > 100) {
      setShowBackground(true)
    } else {
      setShowBackground(false)
    }
  }

  const handleResize = () => {
    const width = window.innerWidth
    if (width <= 550) {
      setHeaderBtnShow(true)
    } else {
      setHeaderBtnShow(false)
    }
  }
  const handleTop = () => {
    console.log(window.pageYOffset)

    if (window.pageYOffset <= 5) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    window.addEventListener('handleTop', handleTop)

    // Initial check for viewport width
    handleResize()
    handleTop()
    // Clean up the event listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('handleTop', handleTop)
    }
  }, [])
  useMemo(() => {
    if (window.pageYOffset <= 0) {
      setIsOpen(false)
    }
  }, [window.pageYOffset])

  const headerStyle: CSSProperties = {
    color: 'white',
    transition: 'all 0.3s'
  }

  if (showBackground) {
    headerStyle.backgroundColor = 'white'
    headerStyle.color = 'black'
  }
  const toggleMenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <header id="header" style={headerStyle} className="bg-transparent fixed top-0 left-0 w-full z-50">
      <nav className="w-full mx-auto flex items-center justify-between p-3">
        <div className="text-2xl font-bold whitespace-nowrap">
          <button onClick={scrollToTop}>My Portfolio</button>
        </div>

        {/* 버튼들 */}
        {headerButtonShow ? (
          <>
            <div className="w-8 h-8 flex flex-col justify-between items-center gap-5">
              {isOpen ? (
                <div className="h-full w-full text-gray-600" onClick={toggleMenu}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
              ) : (
                <div
                  className="cursor-pointer w- h-full flex flex-col justify-between items-center"
                  onClick={toggleMenu}
                >
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                  <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="flex">
            {navItem.map((item, key) => {
              return (
                <button
                  key={key}
                  onClick={() => scrollToSection(`${item.id}`)}
                  className="hover:text-blue-400 mx-2 hover:underline font-bold cursor-pointer"
                >
                  {item.title.replace('-', '')}
                </button>
              )
            })}
          </div>
        )}
      </nav>

      {/* 메뉴판 */}
      <nav
        style={headerStyle}
        className={`hamburger w-full absolute pl-5 py-3 mr-12 me-12 bg-black shadow-lg  ${isOpen ? 'open' : ''}`}
      >
        <ul>
          <li className="mb-2">
            <button onClick={() => scrollToSection('about')}>About</button>
          </li>
          <li className="mb-2">
            <button onClick={() => scrollToSection('skills')}>Skills</button>
          </li>
          <li className="mb-2">
            <button onClick={() => scrollToSection('archive')}>Archiving</button>
          </li>
          <li className="mb-2">
            <button onClick={() => scrollToSection('projects')}>Projects</button>
          </li>
          <li className="mb-2">
            <button onClick={() => scrollToSection('career')}>Career</button>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
