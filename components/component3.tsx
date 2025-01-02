import type { NextPage } from "next";
import Image from "next/image";

export type Component3Type = {
  className?: string;
};

const Component3: NextPage<Component3Type> = ({ className = "" }) => {
  return (
    <section
      className={`mr-[-28px] mb-[307px] w-[1402px] h-[699px] flex flex-row items-end justify-start pt-0 px-0 pb-[91px] box-border gap-[274px] text-left text-102xl-8 text-white font-gallery ${className}`}
    >
      <div className="h-[608px] w-[461px] flex flex-col items-start justify-end pt-0 px-0 pb-[110.4px] box-border">
        <Image
          className="w-[461px] h-[497.6px] relative"
          loading="lazy"
          width={461}
          height={498}
          alt=""
          src="/subtract.svg"
        />
      </div>
      <div className="w-[407.5px] relative h-[562.8px] [transform:_rotate(-4.7deg)] hidden" />
      <div className="h-[440px] w-[640px] flex flex-col items-start justify-start gap-[37px]">
        <div className="w-[667px] h-[345px] flex flex-col items-start justify-start gap-[60px]">
          <div className="w-[668px] h-[161px] relative tracking-[-2.56px] leading-[130.4px] flex items-center shrink-0">
            behind the scenes
          </div>
          <div className="w-[574px] relative text-lg leading-[30.8px] text-gray-100 flex items-center font-inter">
            <span className="w-full">
              <span className="font-medium">{`yk our mission is pretty straight forward, to spark curiosity, fuel imagination, and show students how fun science can be. no fancy kits, no fees, no courses, just giving the ignition they need with our w crew - `}</span>
              <b>{`sanskar, atharv, aishani, aditya, shreya & aishnika `}</b>
            </span>
          </div>
        </div>
        <div className="w-[149px] h-[58px] border-darkviolet border-[1px] border-dashed box-border flex flex-row items-start justify-start pt-4 pb-[17px] pl-[27px] pr-[11px] text-3xl text-darkviolet font-inter">
          <div className="h-[25px] w-28 relative tracking-[0.8px] leading-[20px] lowercase flex items-center shrink-0">
            our work
          </div>
        </div>
      </div>
    </section>
  );
};

export default Component3;
