import { ReactElement } from "react";
import { FaReact, FaSourcetree } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import {
  SiBootstrap,
  SiCsharp,
  SiCss3,
  SiDiscord,
  SiDotnet,
  SiExpress,
  SiFramer,
  SiGit,
  SiGithub,
  SiGitlab,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJetbrains,
  SiLodash,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNetlify,
  SiNodedotjs,
  SiNodemon,
  SiNpm,
  SiPostcss,
  SiPostman,
  SiReactrouter,
  SiRedux,
  SiSap,
  SiSass,
  SiSlack,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
  SiXcode,
  SiYarn,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

interface TechStackItemProps {
  title: string;
  icon: ReactElement<any, any>;
  href?: string;
}

export const techStackItems: TechStackItemProps[] = [
  {
    title: "NPM",
    icon: <SiNpm size={72} color="#e32e37" />,
    href: "https://www.npmjs.com/",
  },
  {
    title: "Yarn",
    icon: <SiYarn size={72} color="#2c8ebb" />,
    href: "https://yarnpkg.com/",
  },
  {
    title: "Git",
    icon: <SiGit size={72} color="#e94e32" />,
    href: "https://git-scm.com/",
  },
  {
    title: "GitHub",
    icon: <SiGithub size={72} color="#161414" />,
    href: "https://github.com/",
  },
  {
    title: "GitLab",
    icon: <SiGitlab size={72} color="#e2432a" />,
    href: "https://about.gitlab.com/",
  },
  {
    title: "Sourcetree",
    icon: <FaSourcetree size={72} color="#2684ff" />,
    href: "https://www.sourcetreeapp.com/",
  },
  {
    title: "Netlify",
    icon: <SiNetlify size={72} color="#2ebcbc" />,
    href: "https://www.netlify.com/",
  },
  {
    title: "Vercel",
    icon: <SiVercel size={72} color="black" />,
    href: "https://vercel.com/",
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs size={72} color="#84cf25" />,
    href: "https://nodejs.org/en/",
  },
  {
    title: "Express",
    icon: <SiExpress size={72} color="black" />,
    href: "https://expressjs.com/",
  },
  {
    title: "Nodemon",
    icon: <SiNodemon size={72} color="#76d04b" />,
    href: "https://www.npmjs.com/package/nodemon",
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={72} color="#00ec64" />,
    href: "https://www.mongodb.com/",
  },
  {
    title: "Postman",
    icon: <SiPostman size={72} color="#f86936" />,
    href: "https://www.postman.com/",
  },
  {
    title: "MySQL",
    icon: <SiMysql size={72} color="#f86936" />,
    href: "https://www.mysql.com/",
  },
  {
    title: "HTML5",
    icon: <SiHtml5 size={72} color="#e34c26" />,
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
  },
  {
    title: "CSS3",
    icon: <SiCss3 size={72} color="#264de4" />,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={72} color={"#F0DB4F"} />,
    href: "https://www.javascript.com/",
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size={72} color="#007acc" />,
    href: "https://www.typescriptlang.org/",
  },
  {
    title: "React",
    icon: <FaReact size={72} color="#61DBFB" />,
    href: "https://reactjs.org/",
  },
  {
    title: "Next.js",
    icon: <TbBrandNextjs size={72} color="black" />,
    href: "https://nextjs.org/",
  },
  {
    title: "Sass",
    icon: <SiSass size={72} color="#cd6799" />,
    href: "https://sass-lang.com/",
  },
  {
    title: "PostCSS",
    icon: <SiPostcss size={72} color="#DD3A0A" />,
    href: "https://postcss.org/",
  },
  {
    title: "Styled Components",
    icon: <SiStyledcomponents size={72} color="#e18187" />,
    href: "https://styled-components.com/",
  },
  {
    title: "Bootstrap",
    icon: <SiBootstrap size={72} color="#563d7c" />,
    href: "https://getbootstrap.com/",
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss size={72} color="#38bdf8" />,
    href: "https://tailwindcss.com/",
  },
  {
    title: "MUI",
    icon: <SiMaterialui size={72} color="#38bdf8" />,
    href: "https://mui.com/",
  },
  {
    title: "Framer",
    icon: <SiFramer size={72} color="#00a4ff" />,
    href: "https://www.framer.com/",
  },
  {
    title: "React Router",
    icon: <SiReactrouter size={72} color="#f94949" />,
    href: "https://reactrouter.com/",
  },
  {
    title: "Redux",
    icon: <SiRedux size={72} color="#764abc" />,
    href: "https://redux.js.org/",
  },
  {
    title: "Lodash",
    icon: <SiLodash size={72} color="#3193ff" />,
    href: "https://lodash.com/",
  },
  {
    title: "React Testing Library",
    icon: <SiTestinglibrary size={72} color="#aa0e0d" />,
    href: "https://testing-library.com/docs/react-testing-library/intro/",
  },
  {
    title: "Jest",
    icon: <SiJest size={72} color="#944058" />,
    href: "https://jestjs.io/",
  },
  {
    title: "React Native",
    icon: <GrReactjs size={72} color="#61DBFB" />,
    href: "https://reactnative.dev/",
  },
  {
    title: ".NET",
    icon: <SiDotnet size={72} color="#5027d5" />,
    href: "https://dotnet.microsoft.com/en-us/",
  },
  {
    title: "C#",
    icon: <SiCsharp size={72} color="#953dac" />,
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    title: "ABAP",
    icon: <SiSap size={72} color="#1873cc" />,
  },
  {
    title: "Slack",
    icon: <SiSlack size={72} color="#00bf7e" />,
    href: "https://slack.com/",
  },
  {
    title: "Discord",
    icon: <SiDiscord size={72} color="#4a62fc" />,
    href: "https://discord.com/",
  },
  {
    title: "Visual Studio Code",
    icon: <SiVisualstudiocode size={72} color="#2778b2" />,
    href: "https://code.visualstudio.com/",
  },
  {
    title: "IntelliJ IDEA",
    icon: <SiJetbrains size={72} color="#f72e5c" />,
    href: "https://www.jetbrains.com/idea/",
  },
  {
    title: "Xcode",
    icon: <SiXcode size={72} color="#1950ef" />,
    href: "https://developer.apple.com/xcode/",
  },
];
