import React from 'react';
import ArticleHeader from './ArticleHeader';
import { AiOutlineCheck } from 'react-icons/ai';
import tistory from '../static/images/tistory.jpg';
import ImageSlider from './ImageSlider';
import photo1 from '../static/images/projects/pyeon1.png';
import photo2 from '../static/images/projects/pyeon2.png';
import photo3 from '../static/images/projects/pyeon3.png';
import photo4 from '../static/images/projects/pyeon4.png';

type Props = {};

const Projects = (props: Props) => {
  const images = [photo1, photo2, photo3, photo4];
  return (
    <article id="projects" className="w-full py-10 bg-blue-300">
      <ArticleHeader name={'projects'} />

      <section
        style={{ width: '1500px'}}
        className="mx-auto flex flex-col flex-wrap content-around gap-8 justify-center"
      >
        <div style={{ width: '100%' }} className="interactiveBox container mx-auto pl-8">
          <div className="text-5xl font-bold text-center mt-5">편의점 식신 (편식)</div>
          <div className="text-2xl font-bold text-gray-400 text-center mt-5"> 23.08.16 ~ 23.09.15 (4주 / 5주)</div>
          <div className="container flex flex-row mt-5">
            <div style={{ border: '1px solid black' }} className="w-1/2  bg-gray-300 p-4">
              <div style={{ marginTop: '20vh', padding: '30px' }}>
                <ImageSlider images={images} />
              </div>
            </div>
            <div style={{  border: '1px solid black' }} className="w-1/2 bg-gray-300 p-4">
              <p className="text-lg font-bold my-20" id="info">
                사용자들과 서로의 편의점 음식 소비 경험을 바탕으로 어떤 음식들의 조합이 맛있을지 공유하고 소통할 수 있는
                웹 서비스입니다.
              </p>

              <div className="border-b border-gray-500 my-3"></div>

              <ul className="list-disc m-3">
                <li className=" text-lg flex my-8  font-bold">
                  <div className="container flex mx-auto mt-8">
                    <AiOutlineCheck />
                    주요기능
                    <ul className="list-disc pl-4 ml-7">
                      <li>편의점 이용하는 유저와 정보 공유</li>
                      <li>편의점 가격 정보 확인</li>
                      <li>주변 편의점 위치</li>
                    </ul>
                  </div>
                </li>
                <li className="text-lg flex my-8  font-bold">
                  <AiOutlineCheck />
                  배포주소
                  <a
                    href="https://pyeonsik.vercel.app/"
                    className="text-blue-500 hover:underline ml-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    편의점 식신
                  </a>
                </li>
                <li className="text-lg flex my-8  font-bold">
                  <AiOutlineCheck />
                  GITHUB
                  <a
                    href="https://github.com/KimYoonSu97/nbc_final_pyeonsik"
                    className="text-blue-500 hover:underline ml-5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    github.com
                  </a>
                </li>
                <li className="text-lg flex my-8  font-bold">
                  <AiOutlineCheck />
                  FRONTEND
                  <p className="ml-5">TypeScript, Styled-components</p>
                </li>
                <li className="text-lg flex my-8 font-bold">
                  <AiOutlineCheck />
                  BACKEND
                  <p className="ml-5">Supabase</p>
                </li>
                <li className=" text-lg flex my-8  font-bold">
                  <div className="container flex mx-auto mt-8">
                    <AiOutlineCheck />
                    맡은 업무
                    <ul className="list-disc pl-4 ml-7">
                      <li>KakaoMap 주변 편의점 정보</li>
                      <li>스켈레톤 UI</li>
                      <li>소셜 로그인 (카카오, 구글)</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Projects;
