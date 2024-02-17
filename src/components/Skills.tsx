import React from 'react';
import ArticleHeader from './ArticleHeader';
import front from '../static/images/skills/front.png';
import back from '../static/images/skills/back.png';
import deployment from '../static/images/skills/deploy.png';
import communication from '../static/images/skills/com.png';
import mobile from '../static/images/skills/mobile.png';
import version from '../static/images/skills/version.png';

type Props = {};

const Skills = (props: Props) => {
  const skillContainers = [
    { value: 'Frontend', imgUrl: front, height: 'h-[650px]' },
    { value: 'Backend', imgUrl: back, height: 'h-[650px]' },
    { value: 'Mobile App', imgUrl: mobile, height: 'h-[250px]' },
    { value: 'Deployment', imgUrl: deployment, height: 'h-[250px]' },
    { value: 'Version Control', imgUrl: version, height: 'h-[250px]' }
  ];

  return (
    <article id="skills" className="w-full py-10 bg-pink-300">
      <ArticleHeader name="skills" />

      <section className="flex flex-wrap justify-center items-start">
        {skillContainers.map((item, index) => (
          <div
            key={index}
            className={`p-8 m-4 bg-white rounded-xl shadow-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:translate-y-1 ${item.height} ${index < 2 ? 'w-72' : 'w-48'}`}
          >
            <div className="mx-auto font-bold text-yellow-600 text-2xl mb-4">{item.value}</div>
            <div className="w-full h-1 bg-black my-5"></div>
            <img src={item.imgUrl} alt={item.value} className="object-contain mb-4 w-full" />
          </div>
        ))}
      </section>
    </article>
  );
};

export default Skills;
