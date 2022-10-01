import type { NextPage } from "next";

import { HeaderVideo, ScrollUpButton } from "components";
import { texts } from "data";
import { useGetText } from "hooks";
import { AboutMe, Career, CreatedWith, Profile, TechStack } from "sections";

const Home: NextPage = () => {
  const t = useGetText();

  return (
    <div>
      <main className="transition-all duration-200 ease-in-out h-min-screen h-full">
        <HeaderVideo
          src="/assets/videos/about_720_m.mp4"
          srcOnMobile="/assets/videos/about_540_m.mp4"
          poster="/assets/images/about_poster.webp"
          stringsToType={[1, 2, 3, 4].map((i) => {
            return t(`WELCOME_TEXT_${i}` as keyof typeof texts);
          })}
          loop
        />
        <Profile />
        <Career />
        <TechStack />
        <AboutMe />
        <CreatedWith />
        <ScrollUpButton />
      </main>
    </div>
  );
};

export default Home;
