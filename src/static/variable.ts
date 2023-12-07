import photo1 from '../static/images/projects/pyeon1.png';
import photo2 from '../static/images/projects/pyeon2.png';
import photo3 from '../static/images/projects/pyeon3.png';
import photo4 from '../static/images/projects/pyeon4.png';

import shop1 from '../static/images/projects/shop/p1.png';
import shop2 from '../static/images/projects/shop/p2.png';
import shop3 from '../static/images/projects/shop/p3.png';
import shop4 from '../static/images/projects/shop/p4.png';
import shop5 from '../static/images/projects/shop/p5.png';
import shop6 from '../static/images/projects/shop/p6.png';

import rn1 from '../static/images/projects/RN_shop/a1.png';
import rn2 from '../static/images/projects/RN_shop/a2.png';
import rn3 from '../static/images/projects/RN_shop/a3.png';
import rn4 from '../static/images/projects/RN_shop/a4.png';
import rn5 from '../static/images/projects/RN_shop/a5.png';

import { Project } from './const/type';

const tistoryLink = 'https://hojin96.tistory.com/';
const githubLink = 'https://github.com/HojinLim/';

export { tistoryLink, githubLink };

export const projectsData: Project[] = [
  {
    title: '편의점 식신 (편식)',
    date: '23.08.16 ~ 23.09.15 (4주 / 5주)',
    images: [photo1, photo2, photo3, photo4],
    description:
      '사용자들과 서로의 편의점 음식 소비 경험을 바탕으로 어떤 음식들의 조합이 맛있을지 공유하고 소통할 수 있는 웹 서비스입니다.',
    features: ['편의점 이용하는 유저와 정보 공유', '편의점 가격 정보 확인', '주변 편의점 위치'],
    deploymentLink: 'https://pyeonsik.vercel.app/',
    githubLink: 'https://github.com/KimYoonSu97/nbc_final_pyeonsik',
    tech: 'TypeScript, Styled-components, Supabase',
    tasks: ['KakaoMap 주변 편의점 정보', '스켈레톤 UI', '소셜 로그인 (카카오, 구글)']
  },
  {
    title: 'HK Mall',
    date: '23.11.20 ~ 23.12.05 (2주 / 3주)',
    images: [shop1, shop2, shop3, shop4, shop5, shop6],
    description: `여러 가지 옷을 구매할 수 있는 쇼핑몰 사이트입니다.\n 2인에서 제작한 소규모 프로젝트 입니다.`,
    features: null,
    deploymentLink: 'https://hkmall-one.vercel.app/',
    githubLink: 'https://github.com/CTDKSKM/hkmall',
    tech: 'TypeScript, Tail Wind css, Firebase, tanstack query, ',
    tasks: ['Firebase 상품 정보 Fetching', '반응형 디자인', '전반적 코드 관리'],
    skills: ['React tanstack query 사용해 데이터 패칭', 'Firebase 유저 관리', 'Firebase Storage 사진 관리'],
    plans: ['카카오 소셜 로그인', '반응형 디자인 보완']
  },
  {
    title: 'HK Mall- (RN version)',
    date: '23.11.20 ~  (진행중)',
    images: [rn1, rn2, rn3, rn4, rn5],
    description: `React로 만든 프로젝트를 다양한 플랫폼에서도 \n유연하게 기능하게 하기 위해 React Native로도 만들어보았습니다. `,
    features: null,

    githubLink: 'https://github.com/HojinLim/RN_Shopping',
    tech: 'TypeScript, React Native, Firebase, tanstack query',
    skills: [
      'React Navigation의 nesting navigation으로 여러 화면 전환',
      'tanstack query 사용해 데이터 패칭',
      'Firebase 상품 정보 Fetching'
    ],
    plans: ['카카오 소셜 로그인', '카메라로 사진 업로드', '스토어에 배포']
  }
];
