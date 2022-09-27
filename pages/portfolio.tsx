import { NextPage } from "next";

import { HeaderVideo } from "components";
import { Portfolio } from "sections";

const PortfolioPage: NextPage = () => {
  return (
    <div>
      <main className="transition-all duration-200 ease-in-out h-min-screen h-full">
        <HeaderVideo
          src="/portfolio_720_m.mp4"
          poster="portfolio_poster.webp"
        />
        <Portfolio />
      </main>
    </div>
  );
};

export default PortfolioPage;
