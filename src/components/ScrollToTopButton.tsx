import React, { useState, useEffect } from 'react';
import ArrowUp from '../static/images/arrow-up.svg';
import { scrollToTop } from '../utils/scrollUtils';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 스크롤 이벤트를 추가하여 버튼 표시 여부를 업데이트
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // 스크롤 이벤트 리스너를 등록
    window.addEventListener('scroll', handleScroll);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <button
      className={`fixed bottom-20 right-20 p-2 rounded-full cursor-pointer ${isVisible ? 'block' : 'hidden'}`}
      onClick={scrollToTop}
    >
      <img src={ArrowUp} alt="" width={40} height={40} style={{ opacity: 0.7 }} />
    </button>
  );
};

export default ScrollToTopButton;
