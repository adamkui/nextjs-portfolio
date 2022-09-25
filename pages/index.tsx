import type { NextPage } from "next";

import { WelcomeVideo } from "components";
import { AboutMe, Career, CreatedWith, Profile, TechStack } from "sections";

const Home: NextPage = () => {
  return (
    <div>
      <main className="transition-all duration-200 ease-in-out h-min-screen h-full">
        <WelcomeVideo />
        <Profile />
        <Career />
        <TechStack />
        <AboutMe />
        <CreatedWith />
      </main>
    </div>
  );
};

export default Home;
