import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-blue-500 p-4 fixed top-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">My Logo</div>
        <ul className="flex space-x-4">
          <li>
            <a href="1" className="text-white hover:underline font-bold">
              AboutMe
            </a>
          </li>
          <li>
            <a href="2" className="text-white hover:underline font-bold">
              Skills
            </a>
          </li>
          <li>
            <a href="3" className="text-white hover:underline font-bold">
              Archiving
            </a>
          </li>
          <li>
            <a href="4" className="text-white hover:underline font-bold">
              Projects
            </a>
          </li>
          <li>
            <a href="5" className="text-white hover:underline font-bold">
              Career
            </a>
          </li>
        </ul>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100">Log In</button>
      </nav>
    </header>
  );
};

export default Header;
