import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import FrameComponent4 from "../components/frame-component4";
import Component6 from "../components/component6";

const JoinUs: NextPage = () => {
  const router = useRouter();

  const onDivContainerClick = useCallback(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-start justify-start pt-[82px] pb-[99px] pl-[92px] pr-[68px] box-border gap-[131px] leading-[normal] tracking-[normal] text-left text-3xl text-darkviolet font-inter mq450:gap-[33px] mq450:pl-5 mq450:box-border mq750:gap-[65px] mq750:pl-[46px] mq750:pr-[34px] mq750:box-border">
      <div className="h-[127px] flex flex-row items-start justify-start pt-0 px-[9px] pb-[69px] box-border">
        <div
          className="self-stretch border-darkviolet border-[1px] border-dashed flex flex-row items-start justify-start pt-3.5 pb-[15px] pl-[31px] pr-[23px] cursor-pointer"
          onClick={onDivContainerClick}
        >
          <a className="[text-decoration:none] relative tracking-[0.8px] leading-[20px] lowercase text-[inherit] inline-block min-w-[64px] mq450:text-lg mq450:leading-[16px]">
            home
          </a>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pl-2 pr-0 box-border max-w-full text-left text-[21px] text-white font-inter">
        <div className="flex-1 flex flex-col items-end justify-start gap-[79.7px] max-w-full mq750:gap-5 mq1100:gap-10">
          <FrameComponent4 />
          <div className="self-stretch flex flex-col items-start justify-start gap-[62.5px] max-w-full mq750:gap-4 mq1100:gap-[31px]">
            <div className="self-stretch flex flex-row items-start justify-start py-0 pl-px pr-0 box-border max-w-full shrink-0">
              <div className="flex-1 flex flex-col items-start justify-start gap-[45.3px] max-w-full mq750:gap-[23px]">
                <h2 className="m-0 self-stretch relative text-inherit tracking-[-0.28px] leading-[33.6px] font-semibold font-[inherit] mq450:text-[17px] mq450:leading-[27px]">
                  okay, okay, but how do you join??
                </h2>
                <h1 className="m-0 self-stretch relative text-9xl tracking-[-0.28px] leading-[33.6px] font-medium font-[inherit] text-gray-500 mq450:text-3xl mq450:leading-[27px]">
                  just click the button below, fill out the form, you’re in!!
                </h1>
              </div>
            </div>
            <div className="h-[58px] border-darkviolet border-[1px] border-dashed box-border flex flex-row items-start justify-start pt-3.5 pb-[15px] pl-[37px] pr-9 text-3xl text-darkviolet">
              <h2 className="m-0 relative text-inherit tracking-[0.8px] leading-[20px] lowercase font-normal font-[inherit] mq450:text-lg mq450:leading-[16px]">
                join us
              </h2>
            </div>
          </div>
        </div>
      </section>
      <Component6 />
    </div>
  );
};

export default JoinUs;
