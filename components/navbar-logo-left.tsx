import type { NextPage } from "next";
import Image from "next/image";

export type NavbarLogoLeftType = {
  className?: string;
};

const NavbarLogoLeft: NextPage<NavbarLogoLeftType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[1440px] bg-white flex flex-row items-start justify-center py-0 px-5 box-border top-[0] z-[99] sticky shrink-0 ${className}`}
    >
      <header className="w-[1200px] flex flex-row items-center justify-center max-w-full text-left text-sm text-black font-inter">
        <div className="flex-1 flex flex-row items-center justify-between gap-5 max-w-full">
          <div className="flex flex-row items-start justify-start">
            <Image
              className="h-9 w-[141px] object-cover"
              width={141}
              height={36}
              alt=""
              src="/logo@2x.png"
            />
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-8 max-w-full mq450:gap-4 mq750:hidden">
            <div className="flex flex-row items-start justify-start py-6 pl-3 pr-[11px]">
              <div className="relative leading-[150%]">About</div>
            </div>
            <div className="flex flex-row items-start justify-start py-6 pl-3 pr-[11px]">
              <div className="relative leading-[150%] inline-block min-w-[59px]">
                Features
              </div>
            </div>
            <div className="flex flex-row items-start justify-start py-6 pl-3 pr-[11px]">
              <div className="relative leading-[150%] inline-block min-w-[47px]">
                Pricing
              </div>
            </div>
            <div className="bg-black flex flex-row items-center justify-center py-2 px-[19px] text-xs text-white">
              <div className="relative leading-[140%] font-medium">
                GET STARTED
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavbarLogoLeft;
