import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
import About from '../components/About'

import Archiving from '../components/Archiving'
import Projects from '../components/Projects'
import ScrollToTopButton from '../components/ScrollToTopButton'
import MouseEffect from '../components/MouseEffect'
import { projectsData } from '../static/variable'
import { Career } from '../components/section/Career'
import Skills from '../components/Skills'

type Props = {}

const Home = (props: Props) => {
  const [mouseEffects, setMouseEffects] = useState<{ id: number; size: number; x: number; y: number }[]>([])
  useEffect(() => {
    const handleMousemove = (event: MouseEvent) => {
      const scrollX = window.scrollX
      const scrollY = window.scrollY
      const mouseX = event.clientX
      const mouseY = event.clientY
      const speed = Math.sqrt(Math.pow(event.movementX, 2) + Math.pow(event.movementY, 2))

      // 새로운 요소 생성
      createFadeOutDiv(mouseX + scrollX, mouseY + scrollY, speed)
    }

    const createFadeOutDiv = (x: number, y: number, speed: number) => {
      const newFadeOutDiv = {
        id: Math.random() + x + y + speed,
        size: Math.min(15, 5 + speed / 2),
        x,
        y
      }

      setMouseEffects((state) => [...state, newFadeOutDiv])
    }

    document.addEventListener('mousemove', handleMousemove)

    return () => {
      document.removeEventListener('mousemove', handleMousemove)
    }
  }, [])
  const deleteEffect = (id: number) => {
    setMouseEffects((state) => state.filter((effect) => effect.id !== id))
  }
  return (
    <>
      <div>
        <Header />

        <Intro />
        <About />
        <Skills />
        <Archiving />
        <Projects projects={projectsData} />
        <Career />

        <ScrollToTopButton />
        <Footer />
        {/* {mouseEffects &&
          mouseEffects.map((effect) => {
            return (
              <React.Fragment key={effect.id}>
                <MouseEffect
                  id={effect.id}
                  mouseX={effect.x}
                  mouseY={effect.y}
                  size={effect.size}
                  deleteFn={deleteEffect}
                />
              </React.Fragment>
            )
          })} */}
      </div>
    </>
  )
}

export default Home
