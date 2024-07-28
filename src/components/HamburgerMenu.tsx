import React, { useState } from 'react'

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div>
      {isOpen ? (
        <div className="cursor-pointer w-8 h-8 flex flex-col justify-between items-center gap-5" onClick={toggleMenu}>
          {/* 취소 버튼 */}
          <svg
            className="h-full w-full text-gray-600"
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
          {/* 메뉴판 */}
          <nav
            className={`absolute mt-10 me-12 bg-white shadow-lg rounded p-4 transition-all duration-300 ${
              isOpen ? 'block' : 'hidden'
            }`}
          >
            <ul>
              <li className="mb-2">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        // 햄버거 버튼
        <div className="cursor-pointer w-8 h-8 flex flex-col justify-between items-center" onClick={toggleMenu}>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
        </div>
      )}
    </div>
  )
}

export default HamburgerMenu
