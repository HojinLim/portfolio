import AuroraEffect from './AuroraEffect';

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="w-full h-[600px] bg-black flex justify-center items-center">
      <h4 className="text-3xl sm:text-4xl font-bold relative overflow-hidden text-white border-none text-center">
        <span className="animated-text" style={{ animationDelay: '0.5s' }}>
          안녕하세요.
        </span>
        <br /> <br />
        <span className="animated-text" style={{ animationDelay: '1s' }}>
          꼼꼼한 성격의 프론트엔드 개발자입니다.
        </span>
        <br /> <br />
        <span className="animated-text" style={{ animationDelay: '1.5s' }}>
          기록을 자주하는 습관이 저의 장점입니다.
        </span>
        <AuroraEffect />
      </h4>
    </div>
  );
};

export default Intro;
