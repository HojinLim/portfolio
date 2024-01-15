import React, { Suspense } from 'react';
import AuroraEffect from './AuroraEffect';
import Spline from '@splinetool/react-spline';

type Props = {};

const Intro = (props: Props) => {
  // const onHandle= (e: SplineEvent)
  return (
    <div className="w-full h-[600px] bg-black flex justify-center items-center">
      {/* <Spline scene="https://prod.spline.design/A6JGsW2hSlFA410A/scene.splinecode"> */}
        <h4 className="text-4xl font-bold relative overflow-hidden text-white border-none text-center">
          안녕하세요. <br />
          <br />
          꼼꼼한 성격의 프론트엔드 개발자입니다.
          <br />
          <br /> 기록을 자주하는 습관이 저의 장점입니다.
          <AuroraEffect />
        </h4>
      {/* </Spline> */}
    </div>
  );
};

export default Intro;
