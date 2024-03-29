import { Project } from './constants/type';
import { life_quotes_imgs } from './images/projects/RN_life_quotes/life_quotes_imgs';

import { project3_imgs } from './images/projects/RN_shop/RN_shop_imgs';
import { project1_imgs } from './images/projects/pyeon/pyeon_imgs';
import { project2_imgs } from './images/projects/shop/shop_imgs';

const tistoryLink = 'https://hojin96.tistory.com/';
const githubLink = 'https://github.com/HojinLim/';

export { tistoryLink, githubLink };

export const projectsData: Project[] = [
  {
    title: '편의점 식신 (편식)',
    date: '23.08.16 ~ 23.09.15 (4주 / 5주)',
    images: project1_imgs,
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
    images: project2_imgs,
    description: `여러 가지 옷을 구매할 수 있는 쇼핑몰 사이트입니다.\n 2인에서 제작한 소규모 프로젝트 입니다.`,
    features: null,
    deploymentLink: 'https://hkmall-one.vercel.app/',
    githubLink: 'https://github.com/CTDKSKM/hkmall',
    tech: 'TypeScript, Tail Wind css, Firebase, tanstack query, ',
    tasks: ['Firebase 상품 정보 Fetching', '반응형 디자인', '전반적 코드 관리'],
    skills: ['React tanstack query 사용해 데이터 패칭', 'Firebase 유저 관리', 'Firebase Storage 사진 관리']
  },
  {
    title: 'HK Mall- (RN version)',
    date: '23.11.20 ~  23.12.05',
    images: project3_imgs,
    description: `React로 만든 프로젝트를 다양한 플랫폼에서도 \n유연하게 기능하게 하기 위해 React Native로도 만들어보았습니다. `,
    features: null,

    githubLink: 'https://github.com/HojinLim/RN_Shopping',
    tech: 'TypeScript, React Native, Firebase, tanstack query',
    skills: [
      'React Navigation의 nesting navigation으로 여러 화면 전환',
      'tanstack query 사용해 데이터 패칭',
      'Firebase 상품 정보 Fetching',
      'expo-camera 사진 촬영 및 업로드'
    ]
  },
  {
    title: 'Life Quotes',
    date: '24.01.04 ~  24.01.12 (1주 / 2주)',
    images: life_quotes_imgs,
    description: `삶의 지혜가 담긴 명언을 볼 수 있는 앱입니다. \n기능은 적으나 처음으로 스토어 배포 테스트 통과 해 본 의미있는 단독 프로젝트입니다. `,
    features: null,
    githubLink: 'https://github.com/HojinLim/RN_life_quotes',
    tistoryLink: 'https://hojin96.tistory.com/97',
    tech: 'React Native, Redux-Persist, Redux Tool Kit, Async Storage, React Navigation',
    skills: [
      'Material Bottom Tab 구현',
      'Redux persist 이용한 명언 데이터 전역 상태 관리 및 내부 DB저장 및 초기화',
      '가로, 세로 반응형 디자인 구현 (useWindowDimensions Hook)',
      '리액트 훅 활용한 성능 최적화 (useMemo)',
      '즐겨찾기 기능',
      `구글 스토어  내부 테스트 접근성 성능 개선 
      \n (경고 22개의 문제 → 사소한 수준의 14개의 문제, 36.36% 개선)`
    ]
  }
];
