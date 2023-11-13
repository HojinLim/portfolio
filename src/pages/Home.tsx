import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import About from '../components/About';
import Skills from '../components/Skills';
import Archiving from '../components/Archiving';
import Projects from '../components/Projects';
import ScrollToTopButton from '../components/ScrollToTopButton';
import MouseEffect from '../components/MouseEffect';

type Props = {};

const Home = (props: Props) => {
  const [mouseEffects, setMouseEffects] = useState<Map<number, { id: number; size: number; x: number; y: number }>>(
    new Map()
  );

  const deleteEffect = (id: number) => {
    setMouseEffects((state) => {
      const newState = new Map(state);
      newState.delete(id);
      return newState;
    });
  };

  useEffect(() => {
    const handleMousemove = (event: MouseEvent) => {
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const speed = Math.sqrt(Math.pow(event.movementX, 2) + Math.pow(event.movementY, 2));

      // 새로운 요소 생성
      createFadeOutDiv(mouseX + scrollX, mouseY + scrollY, speed);
    };

    const createFadeOutDiv = (x: number, y: number, speed: number) => {
      const newFadeOutDiv = {
        id: Math.random() + x + y + speed,
        size: Math.min(15, 5 + speed / 2),
        x,
        y
      };

      setMouseEffects((state) => {
        const newState = new Map(state);
        newState.set(newFadeOutDiv.id, newFadeOutDiv);
        return newState;
      });
    };

    document.addEventListener('mousemove', handleMousemove);
    document.addEventListener('click', handleMousemove);

    return () => {
      document.removeEventListener('mousemove', handleMousemove);
      document.removeEventListener('click', handleMousemove);
    };
  }, []);
  return (
    <>
      <Header />

      <Intro />
      <About />
      <Skills />
      <Archiving />
      <Projects />

      <ScrollToTopButton />
      <Footer />
      {Array.from(mouseEffects) &&
        Array.from(mouseEffects).map(([id, info]) => {
          return (
            <React.Fragment key={id}>
              <MouseEffect id={id} mouseX={info.x} mouseY={info.y} size={info.size} deleteFn={deleteEffect} />
            </React.Fragment>
          );
        })}
    </>
  );
};

export default Home;
