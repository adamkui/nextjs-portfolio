import type { NextPage } from "next";

import { HeaderVideo } from "components";
import { AboutMe, Career, CreatedWith, Profile, TechStack } from "sections";

const Home: NextPage = () => {
  return (
    <div>
      <main className="transition-all duration-200 ease-in-out h-min-screen h-full">
        <HeaderVideo src="/about_720_m.mp4" poster="about_poster.webp" />
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
