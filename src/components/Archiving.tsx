import React from 'react'
import ArticleHeader from './ArticleHeader'
import github from '../static/images/github.png'
import tistory from '../static/images/tistory.png'
import { githubLink, tistoryLink } from '../static/variable'

const boxes = [
  {
    imgUrl: github,
    title: '소스 코드 저장소입니다.',
    link: githubLink,
    contents: ['과거의 프로그램, 앱의 소스 코드', '혼자서 코딩 연습을 위해 끄적이던 코드']
  },
  {
    imgUrl: tistory,
    title: '개인 공부 기록 목적의 블로그입니다.',
    link: tistoryLink,
    contents: ['배운 것을 나의 것으로 만들기 위한 기록', '웹 개발자의 길을 걸으며 공부한 웹 관련 지식 기록']
  },

]

const Archiving = () => {
  return (
    <article id="archive" className="w-full py-10 bg-red-300">
      <div className="archiving_contents_container">
      <ArticleHeader name="archiving" />
      <section className="archiving_items_container">
        {boxes.map((box, index) => (
            <div key={index} className="archiving_item_container">
              <div className='archiving_img_container'>
              <img
                className="w-full"
                src={box.imgUrl}
                alt="github"
              />
              </div>
              <div>
                <a
                  href={box.link}
                  className="lg:text-sm sm:text-lg  text-blue-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {box.link}
                </a>
                <p className="text-lg font-bold mb-8 my-2">{box.title}</p>
              
                <ul className="arching_list_container">
                  {box.contents.map((list, listIndex) => (
                    <li key={listIndex} className="text-lg">
                      {list}
                    </li>
                  ))}
                </ul>
            
              </div>
            </div>
        ))}
      </section>
      </div>
    </article>
  )
}

export default Archiving


