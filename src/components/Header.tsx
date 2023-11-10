import React, {useState, useEffect, CSSProperties} from 'react';

type Props = {};

const navItem = ['AboutMe', 'Skills', 'Archiving', 'Projects', 'Career'];

const Header = (props: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showBackground, setShowBackground] = useState(false);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
    if (position > 100) {
      setShowBackground(true);
    } else {
      setShowBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerStyle: CSSProperties = {
    color: 'gray'
  };

  if (showBackground) {
    headerStyle.backgroundColor = 'skyblue';
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView();
      window.scrollTo(0, window.scrollY - 72);
    }
  };

  return (
    <header style={headerStyle} className="bg-transparent p-4 fixed top-0 left-0 w-full z-50">
      <nav className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">My Logo</div>
        <ul className="flex space-x-4">
          {navItem.map((item) => {
            return (
              <li key={item}>
                <a
                  onClick={() => scrollToSection(`${item.toLowerCase()}`)}
                  className="text-white hover:text-blue-400 hover:underline font-bold transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
        <button className="bg-white text-blue-500 px-4 py-2 rounded-full hover:bg-blue-100">Log In</button>
      </nav>
    </header>
  );
};

export default Header;
