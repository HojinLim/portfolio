import React, { useEffect, useRef } from 'react';

type Props = {
  deleteFn: (id: number) => void;
  id: number;
  mouseX: number;
  mouseY: number;
  size: number;
};

const delay = 500;

const MouseEffect = ({ id, mouseX, mouseY, size, deleteFn }: Props) => {
  const self = useRef<HTMLDivElement>(null);
  const randomR = Math.random() * 220 + 35;
  const randomG = Math.random() * 220 + 35;
  const randomB = Math.random() * 220 + 35;
  const randomA = Math.random();

  useEffect(() => {
    if (self.current instanceof HTMLDivElement) {
      setTimeout(() => {
        if (!self.current) return;

        self.current.style.boxShadow = `0 0 2px 1px rgba(${randomR},${randomG},${randomB},${(randomA + 1) / 1.5})`;

        self.current.style.opacity = `${(randomA + 1) / 4}`;

        self.current.style.backgroundColor = `rgba(${randomR},${randomG},${randomB},${(randomA + 1) / 2})`;

        self.current.style.transform = `translate(${(randomA - 0.5) * -1 * size + 'px'},${
          (randomA - 0.5) * size + 'px'
        }) scale(${Math.max(2, 2 + ((randomA + 1) / 5 + 0.5))})`;

        setTimeout(() => {
          if (!self.current) return;
          deleteFn(id);
        }, delay + 150);
      }, 50);
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
        backgroundColor: 'transparent',
        borderRadius: '50%',
        pointerEvents: 'none',
        transition: `all ${delay / 1000 + 's'} ease`
      }}
    ></div>
  );
};

export default MouseEffect;
