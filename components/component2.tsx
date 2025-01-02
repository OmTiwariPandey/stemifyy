import type { NextPage } from "next";
import Image from "next/image";

export type Component2Type = {
  className?: string;
};

const Component2: NextPage<Component2Type> = ({ className = "" }) => {
  return (
    <div
      className={`h-[700px] w-[1150px] flex flex-col items-start justify-start pt-0 px-0 pb-[289px] box-border relative text-left text-102xl-8 text-white font-gallery ${className}`}
    >
      <div className="w-[380px] relative h-[490px] hidden z-[1]" />
      <div className="w-[797px] h-[145px] relative inline-block shrink-0 z-[3]">
        for the change
      </div>
      <div className="w-[863.1px] h-[263.6px] !m-[0] absolute top-[279px] left-[41px] flex flex-row items-start justify-start z-[4]">
        <div className="h-[453px] w-[359px] !m-[0] absolute top-[-121px] right-[-166.9px] flex flex-row items-start justify-start z-[0]">
          <div className="w-[59.8px] relative [backdrop-filter:blur(10px)] [background:linear-gradient(152.97deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0))] h-[453px]" />
          <div className="w-[59.8px] relative [backdrop-filter:blur(10px)] [background:linear-gradient(152.97deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0))] h-[453px]" />
          <div className="w-[59.8px] relative [backdrop-filter:blur(10px)] [background:linear-gradient(152.97deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0))] h-[453px]" />
          <div className="w-[59.1px] relative [backdrop-filter:blur(10px)] [background:linear-gradient(152.97deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0))] h-[453px]" />
          <div className="w-[60.6px] relative [backdrop-filter:blur(10px)] [background:linear-gradient(152.97deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0))] h-[453px]" />
          <div className="w-[59.8px] relative [backdrop-filter:blur(10px)] [background:linear-gradient(152.97deg,_rgba(255,_255,_255,_0.12),_rgba(255,_255,_255,_0))] h-[453px]" />
        </div>
        <Image
          className="h-[263.6px] w-[863.1px] relative object-contain z-[1]"
          loading="lazy"
          width={863}
          height={264}
          alt=""
          src="/image-6@2x.png"
        />
      </div>
      <div className="w-[985px] h-[268px] flex flex-row items-start justify-start py-0 pl-2.5 pr-0 box-border z-[5] mt-[-2px]">
        <div className="h-[268px] w-[975px] flex flex-col items-start justify-start">
          <div className="w-[975px] h-[145px] flex flex-row items-start justify-start py-0 pl-[115px] pr-0 box-border z-[2]">
            <div className="h-[145px] w-[860px] flex flex-row items-start justify-start gap-[50px]">
              <div className="h-[145px] w-[299px] relative inline-block shrink-0">{`& the`}</div>
              <div className="h-32 w-[512px] flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border text-base font-inter">
                <div className="w-[512px] relative tracking-[0.05em] leading-[28px] font-light inline-block">{`stemifyy is a non-profit organization, spreading stem awareness and teaching cool stuff (like “how to fine tune an ai model”) within the schools in remote area and with very limited resources. `}</div>
              </div>
            </div>
          </div>
          <div className="w-[965px] h-[147px] relative font-semibold font-inter inline-block shrink-0 z-[1] mt-[-24px]">
            change makers
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component2;
