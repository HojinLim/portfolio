import React from 'react';
import ArticleHeader from './ArticleHeader';
import person from '../static/images/person.svg';
import calender from '../static/images/calender.svg';
import locator from '../static/images/locator.svg';
import phoneCall from '../static/images/phone-call.svg';
import mail from '../static/images/mail.svg';
import pen from '../static/images/pen.svg';

type Props = {};

// .env 파일에서 환경변수 가져오기
const address: string | undefined = process.env.REACT_APP_INFO_ADDRESS;
const phone: string | undefined = process.env.REACT_APP_INFO_PHONE;
const univ: string | undefined = process.env.REACT_APP_INFO_UNIV;

const About = (props: Props) => {
  const information = [
    { title: '이름', value: '임호진', icon: person },
    { title: '생년월일', value: '1996.07.04', icon: calender },
    { title: '주소지', value: address, icon: locator },
    { title: '연락처', value: phone, icon: phoneCall },
    { title: '이메일', value: 'hojinim@gmail.com', icon: mail },
    { title: '학력', value: univ, icon: pen }
  ];

  return (
    <article id="about-me" className="w-full py-10 bg-white">
      <ArticleHeader name='About-Me' />

      <section className="flex flex-wrap w-3/5 mx-auto">
        {information.map((info) => {
          return (
            <div key={info.title} className="flex justify-center sm:w-1/2 lg:w-1/3 mx-auto">
              <div className="w-[300px] flex gap-5 my-5 mx-auto">
                <div className="w-[50px] mx-auto">
                  <img src={info.icon} alt={info.title} width="35" height="35" />
                </div>
                <div className="w-2/3 flex flex-col gap-2">
                  <h4 className="font-bold text-xl">{info.title}</h4>
                  <p>{info.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </article>
  );
};

export default About;
