import React from 'react';
import ArticleHeader from './ArticleHeader';
import github from '../static/images/github.png';
import tistory from '../static/images/tistory.jpg';
import { githubLink, tistoryLink } from '../static/variable';

type Props = {};

const Archiving = (props: Props) => {
  return (
    <article id="archiving" className="w-full py-10 bg-red-300">
      <ArticleHeader name={'archiving'} />
      <section>
        <div style={{ height: '450px' }} className="w-3/5 mx-auto flex flex-col flex-wrap content-around gap-8">
          <div style={{ width: '500px', height: '80%' }} className="interactiveBox">
            <div className="text-lg container mx-auto p-4 pl-8">
              <img style={{ width: '60%', height: '80%', border: '1px solid black' }} src={github} alt="github" />
              <a
                href={githubLink}
                className="text-lg text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/HojinLim
              </a>
              <p className="text-lg font-bold mb-8 my-2">소스 코드 저장소입니다.</p>
              <ul className="list-disc">
                <li className="text-lg">과거의 프로그램, 앱의 소스 코드</li>
                <li className="text-lg">혼자서 코딩 연습을 위해 끄적이던 코드</li>
              </ul>
            </div>
          </div>

          <div style={{ width: '500px', height: '80%' }} className="interactiveBox">
            <div className="text-lg container mx-auto p-4 pl-8">
              <img style={{ width: '60%', height: '80%', border: '1px solid black' }} src={tistory} alt="tistory" />
              <a href={tistoryLink} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                hojin96.tistory.com
              </a>
              <p className="text-lg font-bold mb-8 my-2">개인 공부 기록 목적의 블로그입니다.</p>
              <ul className="list-disc">
                <li className="text-lg">배운 것을 나의 것으로 만들기 위한 기록</li>
                <li className="text-lg">웹 개발자의 길을 걸으며 공부한 웹 관련 지식 기록</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Archiving;
