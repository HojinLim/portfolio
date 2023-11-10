import React from 'react';
import { scrollToSection } from '../utils/scrollUtils';

type Props = {};

const Skills = (props: Props) => {
  const skillContainers = [
    { value: 'Frontend', imgUrl: 'logo192.png', height: 500 },
    { value: 'Backend', imgUrl: 'logo192.png', height: 350 },
    { value: 'Deployment', imgUrl: 'logo192.png', height: 300 },
    { value: 'Version Control', imgUrl: 'logo192.png', height: 300 },
    { value: 'Communication', imgUrl: 'logo192.png', height: 300 }
  ];

  return (
    <article id="skills" className="w-full py-10">
      <header className="flex justify-center gap-1 mb-4 text-center">
        <div onClick={() => scrollToSection('skills')}>
          <img
            src={process.env.PUBLIC_URL + '/linkbutterfly.svg'}
            alt="lightning"
            width="24"
            height="24"
            style={{ cursor: 'pointer' }}
          />
        </div>
        <h2 className="text-4xl font-bold underline">SKILLS</h2>
      </header>
      <section style={{ height: '800px' }} className="w-3/5 mx-auto flex flex-col flex-wrap content-around gap-8">
        {skillContainers.map((skillPart, index) => {
          return (
            <div
              key={index}
              style={{ height: skillPart.height }}
              className="p-4 bg-white rounded-2xl shadow-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:translate-y-1 sm:w-[180px] lg:w-[220px]"
            >
              <div className="mx-auto font-bold text-yellow-600">{skillPart.value}</div>
              <div className="w-full mx-auto h-[1px] bg-black my-1"></div>
              <img src={process.env.PUBLIC_URL + '/' + skillPart.imgUrl} alt={skillPart.value} />
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default Skills;
