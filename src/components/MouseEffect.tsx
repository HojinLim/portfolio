import React, { useEffect, useRef } from 'react';

type Props = {
  deleteFn: (id: number) => void;
  id: number;
  mouseX: number;
  mouseY: number;
  size: number;
};

const MouseEffect = ({ id, mouseX, mouseY, size, deleteFn }: Props) => {
  const self = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (self.current instanceof HTMLDivElement) {
      setTimeout(() => {
        if (!self.current) return;
        self.current.style.opacity = `${Math.random() / 2}`;
        self.current.style.backgroundColor = 'skyblue';
        self.current.style.transform = `translateY(${(Math.random() - 0.5) * size + 'px'}) scale(2)`;
        setTimeout(() => {
          if (!self.current) return;
          deleteFn(id);
        }, 500);
      }, 100);
    }
  }, []);
  return (
    <div
      ref={self}
      style={{
        position: 'absolute',
        width: size + 'px',
        height: size + 'px',
        left: mouseX - size / 2 + 'px',
        top: mouseY - size / 2 + 'px',
        border: '1px solid skyblue',
        pointerEvents: 'none'
      }}
      className={`bg-transparent rounded-full shadow-sm shadow-white duration-500 ease`}
    ></div>
  );
};

export default MouseEffect;
