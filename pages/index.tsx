import type { NextPage } from "next";
import NavbarLogoLeft from "../components/navbar-logo-left";
import GroupComponent from "../components/group-component";
import Component1 from "../components/component1";
import Component2 from "../components/component2";
import Component3 from "../components/component3";
import Component4 from "../components/component4";
import Component5 from "../components/component5";
import Component6 from "../components/component6";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-end justify-start pt-0 px-0 pb-[41px] box-border gap-[278px] leading-[normal] tracking-[normal] mq450:gap-[69px] mq750:gap-[139px]">
      <main className="self-stretch flex flex-col items-end justify-start pt-[73px] px-px pb-0 box-border gap-[51px] max-w-full lg:pt-5 lg:box-border mq450:h-auto mq750:gap-[25px]">
        <section className="mt-[-7757.5px] flex flex-row items-start justify-end pt-0 pb-[7637.5px] pl-[87px] pr-[15492px] box-border max-w-full lg:pb-[2098px] lg:box-border mq450:pl-5 mq450:pr-5 mq450:pb-[887px] mq450:box-border mq750:pl-[43px] mq750:pr-[7746px] mq750:box-border mq1050:pb-[1364px] mq1050:box-border">
          <NavbarLogoLeft />
        </section>
        <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
          <div className="w-[1060px] flex flex-row items-start justify-between gap-5 max-w-full mq450:flex-wrap">
            <GroupComponent />
            <Component1 />
          </div>
        </section>
        <section className="flex flex-row items-start justify-start pt-0 pb-[140px] pl-5 pr-0 box-border max-w-full mq450:pb-[59px] mq450:box-border mq1050:pb-[91px] mq1050:box-border">
          <Component2 />
        </section>
        <Component3 />
        <section className="self-stretch flex flex-row items-start justify-center pt-0 pb-[278px] pl-5 pr-[21px] mq750:pb-[181px] mq750:box-border">
          <Component4 />
        </section>
        <Component5 />
      </main>
      <footer className="flex flex-row items-start justify-end py-0 px-20 box-border max-w-full mq750:pl-10 mq750:pr-10 mq750:box-border">
        <Component6 />
      </footer>
    </div>
  );
};

export default Home;
