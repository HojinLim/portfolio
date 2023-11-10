import React from 'react';
import FloatingBox from './FloatingBox';

type Props = {};

const Archiving = (props: Props) => {
  return (
    <div id="archiving" className="flex w-full h-[1000px] bg-slate-100">
      Archiving
      <FloatingBox />
      <FloatingBox />
      <FloatingBox />
      <FloatingBox />
    </div>
  );
};

export default Archiving;
