import React from 'react'
import ArticleHeader from './ArticleHeader'
import github from '../static/images/github.png'
import tistory from '../static/images/tistory.jpg'
import { githubLink, tistoryLink } from '../static/variable'

const boxes = [
  {
    imgUrl: github,
    text: '소스 코드 저장소입니다.',
    link: githubLink,
    bullets: ['과거의 프로그램, 앱의 소스 코드', '혼자서 코딩 연습을 위해 끄적이던 코드']
  },
  {
    imgUrl: tistory,
    text: '개인 공부 기록 목적의 블로그입니다.',
    link: tistoryLink,
    bullets: ['배운 것을 나의 것으로 만들기 위한 기록', '웹 개발자의 길을 걸으며 공부한 웹 관련 지식 기록']
  }
  // 추가적인 박스 데이터를 원하는 만큼 추가할 수 있습니다.
]

const Archiving = () => {
  return (
    <article id="archive" className="w-full py-10 bg-red-300">
      <ArticleHeader name="archiving" />
      <section className="flex flex-wrap justify-center items-center">
        {boxes.map((box, index) => (
          <div
            key={index}
            className="p-7 m-6 bg-white rounded-2xl shadow-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:translate-y-1 w-3/4 sm:w-2/4 md:2/4 lg:w-1/4 overflow-hidden h-[470px]"
          >
            <div className="container mx-auto p-4 pl-8 flex flex-col justify-between h-full">
              <img
                className="w-full h-40 object-fit border-black border-2 rounded-md mb-4"
                src={box.imgUrl}
                alt="github"
              />
              <div>
                <a
                  href={box.link}
                  className="lg:text-sm sm:text-lg  text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {box.link}
                </a>
                <p className="text-lg font-bold mb-8 my-2">{box.text}</p>
                <ul className="list-disc">
                  {box.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="text-lg">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </section>
    </article>
  )
}

export default Archiving
