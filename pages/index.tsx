import type { NextPage } from "next";

import { WelcomeVideo } from "../components/WelcomeVideo/WelcomeVideo";
import { Profile } from "../components/Profile/Profile";
import { Career } from "../components/Career/Career";
import { TechStack } from "../components/TechStack/TechStack";

const Home: NextPage = () => {
  return (
    <div>
      <main className="transition-all duration-200 ease-in-out h-min-screen h-full">
        <WelcomeVideo />
        <Profile />
        <Career />
        <TechStack />
      </main>
    </div>
  );
};

export default Home;
