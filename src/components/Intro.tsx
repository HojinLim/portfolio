import AuroraEffect from './AuroraEffect';

type Props = {};

const Intro = (props: Props) => {
  return (
    <div className="w-full h-[600px] bg-black flex justify-center items-center">
      <h4 className="text-2xl sm:text-2xl md:text-3xl xl:text-4xl font-bold relative overflow-hidden text-white border-none text-center">
        <div className="animated_text" style={{ animationDelay: '0.5s' }}>
          안녕하세요.
        </div>
        <br /> <br />
        <div className="animated_text" style={{ animationDelay: '1s' }}>
          꼼꼼한 성격의 프론트엔드 개발자입니다.
        </div>
        <br /> <br />
        <div className="animated_text" style={{ animationDelay: '1.5s' }}>
          기록을 자주하는 습관이 저의 장점입니다.
        </div>
        <AuroraEffect />
      </h4>
    </div>
  );
};

export default Intro;
