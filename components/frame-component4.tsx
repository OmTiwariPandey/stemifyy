import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[67.1px] max-w-full text-left text-176xl-8 text-white font-gallery mq750:gap-[17px] mq1100:gap-[34px] ${className}`}
    >
      <div className="w-[887px] flex flex-col items-start justify-start pt-0 px-0 pb-[6.2px] box-border max-w-full">
        <div className="relative tracking-[-2.56px] leading-[70.4px] inline-block max-w-full mq450:text-30xl mq450:leading-[28px] mq1025:text-59xl mq1025:leading-[42px]">
          join us
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <div className="w-[451px] flex flex-row items-start justify-start pt-0 px-0 pb-[346.8px] box-border bg-[url('/pexelsgoogledeepmind25626508-1@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pb-[225px] mq450:box-border">
            <Image
              className="h-[377px] w-[451px] relative object-cover hidden max-w-full"
              width={451}
              height={377}
              alt=""
              src="/pexelsgoogledeepmind25626508-1@2x.png"
            />
            <Image
              className="h-[30.2px] w-[151.3px] relative z-[1]"
              loading="lazy"
              width={151}
              height={30}
              alt=""
              src="/intersect.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-8 max-w-full text-26xl-4 text-gray-300 font-inter mq750:gap-4">
        <div className="w-[588px] relative tracking-[-0.28px] leading-[33.6px] font-semibold flex items-center max-w-full mq450:text-8xl mq450:leading-[20px] mq1025:text-17xl mq1025:leading-[27px]">
          who are we looking for??
        </div>
        <h1 className="m-0 relative text-9xl tracking-[-0.28px] leading-[33.6px] text-gray-500 font-[inherit] mq450:text-3xl mq450:leading-[27px]">
          <span className="font-medium">{`we collect intelligent, sweet, smiling, creative people who are capable of creating on a level that is hard to find elsewhere. in short?? we are looking for `}</span>
          <b className="text-gray-400">you</b>
          <span className="font-medium">!!</span>
        </h1>
      </div>
      <Image
        className="self-stretch relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        width={1111}
        height={223}
        alt=""
        src="/pexelsgoogledeepmind25934977-1@2x.png"
      />
    </div>
  );
};

export default FrameComponent4;
