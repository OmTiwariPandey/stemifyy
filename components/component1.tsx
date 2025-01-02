import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";

export type Component1Type = {
  className?: string;
};

const Component1: NextPage<Component1Type> = ({ className = "" }) => {
  const router = useRouter();

  const onAboutTextClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const onJoinUsTextClick = useCallback(() => {
    router.push("/join-us");
  }, [router]);

  return (
    <div
      className={`h-[116px] w-20 flex flex-col items-end justify-start gap-[3.2px] text-right text-lg text-white font-inter ${className}`}
    >
      <a className="[text-decoration:none] w-[59px] h-5 relative font-light text-[inherit] inline-block shrink-0">
        home
      </a>
      <div className="w-12 h-px relative border-white border-t-[1px] border-solid box-border z-[6]" />
      <a
        className="[text-decoration:none] w-[61px] h-5 relative font-light text-[inherit] inline-block shrink-0 cursor-pointer z-[2]"
        onClick={onAboutTextClick}
      >
        about
      </a>
      <a
        className="[text-decoration:none] w-[68px] h-5 relative font-light text-[inherit] inline-block shrink-0 cursor-pointer z-[5]"
        onClick={onJoinUsTextClick}
      >
        join us
      </a>
      <a className="[text-decoration:none] w-[81px] h-5 relative font-light text-[inherit] inline-block shrink-0 z-[4]">
        blogs
      </a>
      <div className="w-20 h-5 relative font-light inline-block shrink-0 z-[3]">
        contact
      </div>
    </div>
  );
};

export default Component1;
