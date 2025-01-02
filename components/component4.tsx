import type { NextPage } from "next";

export type Component4Type = {
  className?: string;
};

const Component4: NextPage<Component4Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[307px] w-[801px] flex flex-col items-start justify-start gap-[30px] text-left text-102xl-8 text-white font-gallery ${className}`}
    >
      <div className="w-[801px] h-[219px] flex flex-col items-start justify-start gap-[55px]">
        <div className="w-[802px] h-[71px] relative tracking-[-2.56px] leading-[70.4px] flex items-center shrink-0">
          jump on board
        </div>
        <div className="w-[797px] h-[93px] flex flex-row items-start justify-start py-0 pl-1.5 pr-0 box-border text-center text-lg text-gray-100 font-inter">
          <div className="w-[791px] relative leading-[30.8px] font-medium flex items-center justify-center shrink-0">
            what if someone has taught you in school - how to code at 14, isn’t
            that just awesome? bad luck your school sucks ! but what if you take
            a step forward and try be the change what you always wanted to see,
            nw we’d love for you to join our crew!
          </div>
        </div>
      </div>
      <div className="w-[475px] h-[58px] flex flex-row items-start justify-start py-0 pl-[326px] pr-0 box-border text-3xl text-darkviolet font-inter">
        <div className="h-[58px] w-[149px] flex flex-row items-start justify-start">
          <div className="h-[58px] w-[149px] border-darkviolet border-[1px] border-dashed box-border flex flex-row items-start justify-start pt-4 px-[38px] pb-[16.8px]">
            <div className="h-[25.2px] w-[73px] relative tracking-[0.8px] leading-[20px] lowercase flex items-center shrink-0">
              join us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component4;
