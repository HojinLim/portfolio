import React from 'react';
import ArticleHeader from './ArticleHeader';
import front from '../static/images/skills/front.png';
import back from '../static/images/skills/back.png';
import communication from '../static/images/skills/com.png';
import mobile from '../static/images/skills/mobile.png';
import version from '../static/images/skills/version.png';
import { githubLink } from '../static/variable';
import { useMediaQuery } from 'react-responsive';

type Props = {};

const Skills = (props: Props) => {
  const imagesDir = '../static/images/skills/';
  type images = string[];

  const skillContainers = [
    { value: 'Frontend', imgUrl: front, height: 750, width: 300 },
    { value: 'Backend', imgUrl: back, height: 500, width: 300 },
    { value: 'Mobile App', imgUrl: mobile, height: 210, width: 280 },
    { value: 'Version Control', imgUrl: version, height: 300, width: 300 },
    { value: 'Communication', imgUrl: communication, height: 400, width: 300 }
  ];
  const isNarrow = useMediaQuery({ query: '(max-width: 700px)' });

  return (
    <article id="skills" className="w-full py-10 bg-pink-300">
      <ArticleHeader name="skills" />

      <section>
        {!isNarrow ? (
          <div style={{ height: '800px' }} className="w-4/5 mx-auto flex flex-col flex-wrap content-around gap-8">
            {skillContainers.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ height: item.height, width: item.width, padding: '20px' }}
                  className="interactiveBox"
                >
                  <div className="mx-auto font-bold text-yellow-600 text-3xl">{item.value}</div>
                  <div className="w-full mx-auto h-[1px] bg-black my-5"></div>

                  <img src={item.imgUrl} alt={item.value} />
                </div>
              );
            })}
          </div>
        ) : (
          <div style={{ height: '2500px' }} className="w-4/5 mx-auto flex flex-col content-around gap-8">
            {skillContainers.map((item, index) => {
              return (
                <div
                  key={index}
                  style={{ height: item.height, width: item.width, padding: '20px' }}
                  className="interactiveBox"
                >
                  <div className="mx-auto font-bold text-yellow-600 text-3xl">{item.value}</div>
                  <div className="w-full mx-auto h-[1px] bg-black my-5"></div>

                  <img src={item.imgUrl} alt={item.value} />
                </div>
              );
            })}
          </div>
        )}
      </section>
    </article>
  );
};

export default Skills;
