import React from 'react'
import ArticleHeader from './ArticleHeader'
import front from '../static/images/skills/front.png'
import back from '../static/images/skills/back.png'
import deployment from '../static/images/skills/deploy.png'
import mobile from '../static/images/skills/mobile.png'
import version from '../static/images/skills/version.png'

type Props = {}

const Skills = (props: Props) => {
  const skillContainers = [
    { value: 'Frontend', imgUrl: front },
    { value: 'Backend', imgUrl: back },
    { value: 'Mobile App', imgUrl: mobile, height: '15rem' },
    { value: 'Deployment', imgUrl: deployment, height: '20rem' },
    { value: 'Version Control', imgUrl: version, height: '20rem' }
  ]

  return (
    <article id="skills" className="w-full py-10 bg-pink-300">
      <ArticleHeader name="skills" />

      <section id="skills-container" className="flex flex-wrap justify-center">
        {skillContainers.map((item, index) => (
          <div
            key={index}
            className={`p-8 m-4 bg-white rounded-xl shadow-lg hover:shadow-lg transition duration-300 common_card_effect ease-in-out transform hover:translate-y-1 mx-auto`}
            style={{ width: '15rem', height: item.height }}
          >
            <div className="mx-auto font-bold text-yellow-600 text-2xl mb-4">{item.value}</div>
            <div className="w-full h-1 bg-black"></div>
            <img src={item.imgUrl} alt={item.value} className="object-contain w-full" />
          </div>
        ))}
      </section>
    </article>
  )
}
export default Skills
