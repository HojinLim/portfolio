import React from 'react';
import ArticleHeader from './ArticleHeader';
import front from '../static/images/skills/front.png';
import back from '../static/images/skills/back.png';
import communication from '../static/images/skills/com.png';
import mobile from '../static/images/skills/mobile.png';
import version from '../static/images/skills/version.png';

type Props = {};

const Skills = (props: Props) => {
  const skillContainers = [
    { value: 'Frontend', imgUrl: front },
    { value: 'Backend', imgUrl: back },
    { value: 'Mobile App', imgUrl: mobile },
    // { value: 'Communication', imgUrl: communication },
    { value: 'Version Control', imgUrl: version }
  ];

  return (
    <article id="skills" className="w-full py-10 bg-pink-300">
      <ArticleHeader name="skills" />

      <section className="flex flex-wrap justify-center items-start">
        {skillContainers.map((item, index) => (
          <div
            key={index}
            className="p-8 m-4 bg-white rounded-xl shadow-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:translate-y-1 w-72 sm:w-80 lg:w-96 flex flex-col items-center"
          >
            <div className="mx-auto font-bold text-yellow-600 text-3xl mb-4">{item.value}</div>
            <div className="w-full h-1 bg-black my-5"></div>
            <img src={item.imgUrl} alt={item.value} className="object-contain mb-4" />
          </div>
        ))}
      </section>
    </article>
  );
};

export default Skills;
