import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../components/About';
import Skills from '../components/Skills';
import Archiving from '../components/Archiving';
import Projects from '../components/Projects';
import Career from '../components/Career';

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Archiving />
      <Projects />
      <Career />
      
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">hi</button>
      <Footer />
    </>
  );
};

export default Home;
