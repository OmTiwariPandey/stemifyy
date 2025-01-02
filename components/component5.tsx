import type { NextPage } from "next";
import Image from "next/image";

export type Component5Type = {
  className?: string;
};

const Component5: NextPage<Component5Type> = ({ className = "" }) => {
  return (
    <section
      className={`mr-[-74px] w-[1265px] h-[839px] flex flex-row items-start justify-start gap-[67px] text-left text-102xl-8 text-white font-gallery ${className}`}
    >
      <div className="h-[727px] w-[693px] flex flex-col items-start justify-start pt-[70px] px-0 pb-0 box-border">
        <div className="w-[693px] h-[657px] flex flex-col items-start justify-start gap-[35px]">
          <div className="w-[693px] relative leading-[130.4px] flex items-center">
            not all heroes wear capes
          </div>
          <div className="w-[668px] h-[230px] flex flex-col items-start justify-start gap-12 text-lg text-gray-100 font-inter">
            <div className="w-[668px] relative leading-[30.8px] font-medium flex items-center">
              weather its donation, spreading the word, or volunteering ur time,
              every bit of ur effort help us light hundreds of classrooms; make
              tangible difference in thousands of student life who may don’t got
              the right resources but they got the potential.
            </div>
            <div className="w-[149px] h-[58px] border-darkviolet border-[1px] border-dashed box-border flex flex-row items-start justify-start pt-3.5 px-[31px] pb-[18.8px] text-3xl text-darkviolet">
              <div className="h-[25.2px] w-[88px] relative tracking-[0.8px] leading-[20px] lowercase flex items-center shrink-0">{`support `}</div>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="h-[839px] w-[505px] relative object-contain"
        loading="lazy"
        width={505}
        height={839}
        alt=""
        src="/pexelsgoogledeepmind25626507-11@2x.png"
      />
    </section>
  );
};

export default Component5;
