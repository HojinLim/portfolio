import ArticleHeader from '../../components/ArticleHeader'

import logo from '../../static/images/career_logo.png'
export const Career = () => {
  return (
    <article id="career" className=" w-full py-10 bg-slate-400">
      <ArticleHeader name="Career" />
      <section className="career_container  p-8">
        {/* 로고 */}
        <div className="career_logo_container">
          <div className="career_logo_wrapper">
            <img src={logo} className="rounded-full career_logo_img" />
          </div>
        </div>
        {/* 내용*/}
        <div className="career_info_container">
          <div className="career_title">
            (주) 프로텍트
            <a className="career_link" target="_blank" href="https://protectx.imweb.me/" rel="noreferrer" color="brown">
              <i className="fa-solid fa-link career_link fa-2xs"></i>
            </a>
          </div>

          <div className="career_period">2024.04 - 현재</div>
          <div className="career_description">
            <b>고객 CRM, 분양 솔루션, Chat-bot</b> 솔루션 서비스를 운영합니다.
            <br />
            주로 <b>vue와 strapi</b> 사용하고, XI CRM의 웹 퍼블리싱과 프론트를 맡고 있습니다.
          </div>
          {/* 주요 업무 제목 */}
          <div className="career_work_container">
            <div className="career_work_title">▎유튜브 클론코딩</div>
            <div className="career_work_period">2024년 상반기</div>
            <ul className="career_work_list">
              <li>회사 업무 적응을 위해 2개월간 클론 코딩 진행</li>
              <li>Strapi로 헤드리스 CMS, graphql 사용 경험</li>
              <li>React의 recoil, useHook으로 사용 경험</li>
              <li>Mui라이브러리와 css로 스타일 구성</li>
              <li>관리자 페이지, 로그인, 시청 페이지, 좋아요 페이지 구현</li>
            </ul>
          </div>

          <div className="career_work_container">
            <div className="career_work_title">▎프랭크 버거 마이너 기능 개발</div>
            <div className="career_work_period">2024년 상반기</div>
            <ul className="career_work_list">
              <li>프랭크 버거 관리자 페이지 영업 일시정지 기능 구현</li>
              <li>관리자 페이지 퍼블리싱 및 프론트 작업 (react)</li>
            </ul>
          </div>

          <div className="career_work_container">
            <div className="career_work_title">▎XI분양 서비스 CRM</div>
            <div className="career_work_period">2024년 하반기</div>
            <ul className="career_work_list">
              <li>마케터 관리, 마케팅 DB 페이지 기능 개발 및 오류 수정</li>
              <li>퍼블리싱 및 API연동 및 데이터 배분 (vue)</li>
              <li>Apex Chart와 vanilla js이용한 캠페인 통계관리 페이지 그래프 구현</li>
            </ul>
          </div>
        </div>
      </section>
    </article>
  )
}
