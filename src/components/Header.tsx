import React, { useState, useEffect, CSSProperties } from 'react'
import { scrollToSection, scrollToTop } from '../utils/scrollUtils'
import HamburgerMenu from './HamburgerMenu'
import { useRecoilState } from 'recoil'
import { headerBtnShow } from 'src/atom/store'

type Props = {}

const navItem = [
  { id: 'about', title: 'About-Me' },
  { id: 'skills', title: 'Skills' },
  { id: 'archive', title: 'Archiving' },
  { id: 'projects', title: 'Projects' }
]

const Header = (props: Props) => {
  const [showBackground, setShowBackground] = useState(false)
  const [headerButtonShow, setHeaderBtnShow] = useRecoilState(headerBtnShow)

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

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    // Initial check for viewport width
    handleResize()

    // Clean up the event listeners on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const headerStyle: CSSProperties = {
    color: 'white',
    transition: 'all 0.3s'
  }

  if (showBackground) {
    headerStyle.backgroundColor = 'white'
    headerStyle.color = 'black'
  }

  return (
    <header id="header" style={headerStyle} className="bg-transparent p-4 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          <button onClick={scrollToTop}>My Portfolio</button>
        </div>

        <ul className="flex space-x-4">
          {!headerButtonShow ? (
            navItem.map((item, key) => {
              return (
                <li key={key}>
                  <button
                    onClick={() => scrollToSection(`${item.id}`)}
                    className="hover:text-blue-400 hover:underline font-bold cursor-pointer"
                  >
                    {item.title.replace('-', '')}
                  </button>
                </li>
              )
            })
          ) : (
            <HamburgerMenu />
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
