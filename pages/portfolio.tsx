import { NextPage } from "next";

import { HeaderVideo, ScrollUpButton } from "components";
import { Portfolio } from "sections";

const PortfolioPage: NextPage = () => {
  return (
    <div>
      <main className="transition-all duration-200 ease-in-out h-min-screen h-full">
        <HeaderVideo
          src="/assets/videos/portfolio_720_m.mp4"
          srcOnMobile="/assets/videos/portfolio_540_m.mp4"
          poster="/assets/images/portfolio_poster.webp"
          stringsToType={["Welcome to my portfolio."]}
          loop={false}
        />
        <Portfolio />
        <ScrollUpButton />
      </main>
    </div>
  );
};

export default PortfolioPage;
