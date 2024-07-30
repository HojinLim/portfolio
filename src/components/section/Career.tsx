import ArticleHeader from '../../components/ArticleHeader'
import React from 'react'
import back from '../../static/images/skills/back.png'
export const Career = () => {
  return (
    <article id="career" className="w-full py-10 bg-[#F5F5F5]">
      <ArticleHeader name="Career" />

      <section className="md:max-[950px]:bg-red-900 flex flex-wrap w-3/5 mx-auto bg-slate-400 p-5">
        {/* 파트1 */}
        <div className="w-full h-[500px] bg-blue-900">
          <img src={back} className="rounded-full border-2 border-gray-700 object-contain w-[100px] h-[100px]" />
        </div>
        <div className="w-[500px] h-[500px] bg-slate-600"></div>
        {/* 파트2 */}
        <div></div>
      </section>
    </article>
  )
}
