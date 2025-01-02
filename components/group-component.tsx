import type { NextPage } from "next";
import Image from "next/image";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[27px] w-[118.8px] flex flex-row items-start justify-start gap-[4.3px] text-left text-3xl-2 text-white font-inter ${className}`}
    >
      <div className="h-[27px] w-[19.5px] flex flex-col items-start justify-start pt-[3.6px] px-0 pb-0 box-border z-[2]">
        <Image
          className="w-[19.5px] h-[23.4px] relative object-cover"
          loading="lazy"
          width={20}
          height={23}
          alt=""
          src="/image-11@2x.png"
        />
      </div>
      <a className="[text-decoration:none] h-[27px] w-24 relative font-bold text-[inherit] inline-block shrink-0 z-[1]">
        stemifyy
      </a>
    </div>
  );
};

export default GroupComponent;
