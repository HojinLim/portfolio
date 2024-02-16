import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import ArticleHeader from './ArticleHeader';
import front from '../static/images/skills/front.png';
import back from '../static/images/skills/back.png';
import mobile from '../static/images/skills/mobile.png';
import version from '../static/images/skills/version.png';

type Props = {};

const Skills = (props: Props) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = element.offsetTop + element.offsetHeight / 2;

      if (scrollPosition + 850 > elementPosition) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: 'easeOut' } // 애니메이션 설정
        });
      } else {
        controls.start({
          opacity: 0,
          y: 50,
          transition: { duration: 0.5, ease: 'easeOut' } // 애니메이션 설정
        });
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [controls]);

  const skillContainers = [
    { value: 'Frontend', imgUrl: front },
    { value: 'Backend', imgUrl: back },
    { value: 'Mobile App', imgUrl: mobile },
    { value: 'Version Control', imgUrl: version }
  ];

  return (
    <article id="skills" className="w-full py-10 bg-pink-300">
      <ArticleHeader name="skills" />

      <section className="flex flex-wrap justify-center items-start">
        {skillContainers.map((item, index) => (
          <motion.div
            key={index}
            className="p-8 m-4 bg-white rounded-xl shadow-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:translate-y-1 w-72 sm:w-80 lg:w-96 flex flex-col items-center"
            initial={{ opacity: 0, y: 50 }} // 초기 상태 설정
            animate={controls} // 애니메이션 제어
            ref={ref}
          >
            <div className="mx-auto font-bold text-yellow-600 text-3xl mb-4">{item.value}</div>
            <div className="w-full h-1 bg-black my-5"></div>
            <img src={item.imgUrl} alt={item.value} className="object-contain mb-4" />
          </motion.div>
        ))}
      </section>
    </article>
  );
};

export default Skills;
