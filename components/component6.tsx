import type { NextPage } from "next";
import Image from "next/image";

export type Component6Type = {
  className?: string;
};

const Component6: NextPage<Component6Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[280px] w-[1100px] flex flex-row items-end justify-start relative gap-[306px] text-left text-111xl text-linen-100 font-inter ${className}`}
    >
      <div className="h-[280px] w-[415px] flex flex-col items-start justify-start gap-36 z-[2] text-white font-gallery">
        <h1 className="m-0 w-[416px] h-[120px] relative text-inherit tracking-[-2.56px] leading-[120px] font-normal font-[inherit] flex items-center shrink-0 z-[2]">
          see ya!!
        </h1>
        <div className="w-[209px] h-4 relative text-2xs-9 tracking-[0.28px] leading-[15.6px] font-inter text-linen-100 flex items-center shrink-0 z-[1]">
          © stemifyy.org 2024
        </div>
      </div>
      <div className="h-[262px] w-[379px] flex flex-col items-end justify-start gap-[108px] z-[1] text-base-9">
        <div className="w-[379px] h-[138px] flex flex-col items-start justify-start gap-12">
          <div className="w-[379px] h-[63px] relative tracking-[0.36px] leading-[25.2px] flex items-center shrink-0">{`if you got any doubts, suggestions, & feedback pls shoot a msg at us. we’ll get to u asap! except when we’re in school, or having tests`}</div>
          <div className="w-[374px] h-[27px] flex flex-row items-start justify-start gap-[63px] text-xs">
            <div className="h-[27px] w-[124px] flex flex-row items-start justify-start gap-3.5">
              <Image
                className="h-[27px] w-[27px] relative rounded"
                loading="lazy"
                width={27}
                height={27}
                alt=""
                src="/background.svg"
              />
              <div className="h-[20.5px] w-[57.9px] flex flex-col items-start justify-start pt-[4.9px] px-0 pb-0 box-border">
                <div className="w-[58.9px] h-[15.6px] relative tracking-[0.28px] leading-[15.6px] flex items-center shrink-0">
                  Write us
                </div>
              </div>
            </div>
            <div className="h-[27px] w-[187px] flex flex-row items-start justify-start gap-3.5">
              <Image
                className="h-[27px] w-[27px] relative rounded"
                loading="lazy"
                width={27}
                height={27}
                alt=""
                src="/background-1.svg"
              />
              <div className="h-[21px] w-32 flex flex-col items-start justify-start pt-[5px] px-0 pb-0 box-border">
                <div className="w-[129px] h-4 relative tracking-[0.28px] leading-[15.6px] flex items-center shrink-0">
                  crew@stemifyy.org
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[156px] h-4 flex flex-row items-start justify-start gap-12 text-2xs-9">
          <div className="h-4 w-[65px] relative tracking-[0.28px] leading-[15.6px] flex items-center shrink-0">
            instagram
          </div>
          <div className="h-4 w-[45px] relative text-2xs-7 tracking-[0.28px] leading-[15.6px] flex items-center shrink-0">
            linkedin
          </div>
        </div>
      </div>
      <div className="h-4 w-[88px] absolute !m-[0] top-[-19px] right-[291px] text-xs tracking-[0.12px] leading-[15.6px] flex items-center opacity-[0.75] z-[2]">
        Contact us
      </div>
    </div>
  );
};

export default Component6;
