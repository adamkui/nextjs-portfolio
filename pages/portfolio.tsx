import { NextPage } from "next";

import { WelcomeVideo } from "components";
import { Portfolio } from "sections";

const PortfolioPage: NextPage = () => {
  return (
    <div>
      <main className="transition-all duration-200 ease-in-out h-min-screen h-full">
        <WelcomeVideo />
        <Portfolio />
      </main>
    </div>
  );
};

export default PortfolioPage;
