import React from 'react';
import Header from '../components/Header';
import Intro from '../components/Intro';
import Footer from '../components/Footer';
import About from '../components/About';
import Skills from '../components/Skills';
import Archiving from '../components/Archiving';
import Projects from '../components/Projects';
import ScrollToTopButton from '../components/ScrollToTopButton';

type Props = {};

const Home = (props: Props) => {
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
    </>
  );
};

export default Home;
