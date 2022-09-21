import { ReactElement } from "react";
import { FaSourcetree, FaReact } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import {
  SiNpm,
  SiYarn,
  SiGit,
  SiGithub,
  SiGitlab,
  SiNodedotjs,
  SiExpress,
  SiNodemon,
  SiPostman,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiSass,
  SiPostcss,
  SiStyledcomponents,
  SiBootstrap,
  SiTailwindcss,
  SiMaterialui,
  SiFramer,
  SiReactrouter,
  SiRedux,
  SiLodash,
  SiTestinglibrary,
  SiJest,
  SiDotnet,
  SiCsharp,
  SiSap,
  SiSlack,
  SiDiscord,
  SiVisualstudiocode,
  SiJetbrains,
  SiXcode,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export interface TechStackCard {
  title: string;
  icon: ReactElement;
  isDarkMode: boolean;
}

export const techStackData: Omit<TechStackCard, "isDarkMode">[] = [
  {
    title: "NPM",
    icon: <SiNpm size={72} color="#e32e37" />,
  },
  {
    title: "Yarn",
    icon: <SiYarn size={72} color="#2c8ebb" />,
  },
  {
    title: "Git",
    icon: <SiGit size={72} color="#e94e32" />,
  },
  {
    title: "GitHub",
    icon: <SiGithub size={72} color="#161414" />,
  },
  {
    title: "GitLab",
    icon: <SiGitlab size={72} color="#e2432a" />,
  },
  {
    title: "Sourcetree",
    icon: <FaSourcetree size={72} color="#2684ff" />,
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs size={72} color="#84cf25" />,
  },
  {
    title: "Express",
    icon: <SiExpress size={72} color="black" />,
  },
  {
    title: "Nodemon",
    icon: <SiNodemon size={72} color="#76d04b" />,
  },
  {
    title: "Postman",
    icon: <SiPostman size={72} color="#f86936" />,
  },
  {
    title: "MySQL",
    icon: <SiMysql size={72} color="#f86936" />,
  },
  {
    title: "HTML5",
    icon: <SiHtml5 size={72} color="#e34c26" />,
  },
  {
    title: "CSS3",
    icon: <SiCss3 size={72} color="#264de4" />,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={72} color={"#F0DB4F"} />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size={72} color="#007acc" />,
  },
  {
    title: "React",
    icon: <FaReact size={72} color="#61DBFB" />,
  },
  {
    title: "Next.js",
    icon: <TbBrandNextjs size={72} color="black" />,
  },
  {
    title: "Sass",
    icon: <SiSass size={72} color="#cd6799" />,
  },
  {
    title: "PostCSS",
    icon: <SiPostcss size={72} color="#DD3A0A" />,
  },
  {
    title: "Styled Components",
    icon: <SiStyledcomponents size={72} color="#e18187" />,
  },
  {
    title: "Bootstrap",
    icon: <SiBootstrap size={72} color="#563d7c" />,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss size={72} color="#38bdf8" />,
  },
  {
    title: "MUI",
    icon: <SiMaterialui size={72} color="#38bdf8" />,
  },
  {
    title: "Framer",
    icon: <SiFramer size={72} color="#00a4ff" />,
  },
  {
    title: "React Router",
    icon: <SiReactrouter size={72} color="#f94949" />,
  },
  {
    title: "Redux",
    icon: <SiRedux size={72} color="#764abc" />,
  },
  {
    title: "Lodash",
    icon: <SiLodash size={72} color="#3193ff" />,
  },
  {
    title: "React Testing Library",
    icon: <SiTestinglibrary size={72} color="#aa0e0d" />,
  },
  {
    title: "Jest",
    icon: <SiJest size={72} color="#944058" />,
  },
  {
    title: "React Native",
    icon: <GrReactjs size={72} color="#61DBFB" />,
  },
  {
    title: ".NET",
    icon: <SiDotnet size={72} color="#5027d5" />,
  },
  {
    title: "C#",
    icon: <SiCsharp size={72} color="#953dac" />,
  },
  {
    title: "ABAP",
    icon: <SiSap size={72} color="#1873cc" />,
  },
  {
    title: "Slack",
    icon: <SiSlack size={72} color="#00bf7e" />,
  },
  {
    title: "Discord",
    icon: <SiDiscord size={72} color="#4a62fc" />,
  },
  {
    title: "Visual Studio Code",
    icon: <SiVisualstudiocode size={72} color="#2778b2" />,
  },
  {
    title: "IntelliJ IDEA",
    icon: <SiJetbrains size={72} color="#f72e5c" />,
  },
  {
    title: "Xcode",
    icon: <SiXcode size={72} color="#1950ef" />,
  },
];
