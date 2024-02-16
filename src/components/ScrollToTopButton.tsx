import React, { useState, useEffect, useRef } from 'react';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';
import { scrollToTop } from '../utils/scrollUtils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const arrowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const transArrow = (action: string) => {
    if (arrowRef.current) {
      if (action === 'in') {
        arrowRef.current.style.transform = 'translateY(-2px) scale(1.1)';
      } else {
        arrowRef.current.style.transform = 'none';
      }
    }
  };

  return (
    <button
      className={`bg-white opacity-70 fixed bottom-7 right-7 p-2.5 rounded-full cursor-pointer flex items-center justify-center ${
        isVisible ? 'block' : 'hidden'
      } hover:shadow-black hover:bg-white transition-all duration-75`}
      onClick={scrollToTop}
      onMouseEnter={() => transArrow('in')}
      onMouseLeave={() => transArrow('out')}
    >
      <div className="opacity-70 hover:opacity-100 transition-all duration-300" ref={arrowRef}>
        <TbArrowBigUpLinesFilled className="arrow-icon" size={28} />
      </div>
    </button>
  );
};

export default ScrollToTopButton;
