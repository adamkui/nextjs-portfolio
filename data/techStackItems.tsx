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
import { texts } from ".";

enum TechStackItemCategory {
  "PACKAGE_MANAGER" = "PACKAGE_MANAGER",
  "VERSION_CONTROL_SYSTEM" = "VERSION_CONTROL_SYSTEM",
  "WEB_HOSTING" = "WEB_HOSTING",
  "PROGRAMMING_LANGUAGE" = "PROGRAMMING_LANGUAGE",
  "MARKUP_LANGUAGE" = "MARKUP_LANGUAGE",
  "STYLE_SHEET_LANGUAGE" = "STYLE_SHEET_LANGUAGE",
  "FRONTEND_FRAMEWORK" = "FRONTEND_FRAMEWORK",
  "FRONTEND_LIBRARY" = "FRONTEND_LIBRARY",
  "CSS_FRAMEWORK" = "CSS_FRAMEWORK",
  "CSS_PREPROCESSOR" = "CSS_PREPROCESSOR",
  "UI_KIT" = "UI_KIT",
  "BACKEND_FRAMEWORK" = "BACKEND_FRAMEWORK",
  "BACKEND_LIBRARY" = "BACKEND_LIBRARY",
  "DATABASE" = "DATABASE",
  "SOFTWARE" = "SOFTWARE",
}

type LinkProps = {
  label: string;
  href: string;
};

interface TechStackItemProps {
  title: string;
  icon?: ReactElement<any, any>;
  href?: string;
  category: TechStackItemCategory;
}

interface TechStackDialogItems {
  titleTrlKey: keyof typeof texts;
  description?: string;
  list: LinkProps[];
}

export const techStackItems: TechStackItemProps[] = [
  {
    title: "NPM",
    icon: <SiNpm size={72} color="#e32e37" />,
    href: "https://www.npmjs.com/",
    category: TechStackItemCategory.PACKAGE_MANAGER,
  },
  {
    title: "Yarn",
    icon: <SiYarn size={72} color="#2c8ebb" />,
    href: "https://yarnpkg.com/",
    category: TechStackItemCategory.PACKAGE_MANAGER,
  },
  {
    title: "Git",
    icon: <SiGit size={72} color="#e94e32" />,
    href: "https://git-scm.com/",
    category: TechStackItemCategory.VERSION_CONTROL_SYSTEM,
  },
  {
    title: "GitHub",
    icon: <SiGithub size={72} color="#161414" />,
    href: "https://github.com/",
    category: TechStackItemCategory.VERSION_CONTROL_SYSTEM,
  },
  {
    title: "GitLab",
    icon: <SiGitlab size={72} color="#e2432a" />,
    href: "https://about.gitlab.com/",
    category: TechStackItemCategory.VERSION_CONTROL_SYSTEM,
  },
  {
    title: "SVN",
    href: "https://subversion.apache.org/",
    category: TechStackItemCategory.VERSION_CONTROL_SYSTEM,
  },
  {
    title: "Sourcetree",
    icon: <FaSourcetree size={72} color="#2684ff" />,
    href: "https://www.sourcetreeapp.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Netlify",
    icon: <SiNetlify size={72} color="#2ebcbc" />,
    href: "https://www.netlify.com/",
    category: TechStackItemCategory.WEB_HOSTING,
  },
  {
    title: "Vercel",
    icon: <SiVercel size={72} color="black" />,
    href: "https://vercel.com/",
    category: TechStackItemCategory.WEB_HOSTING,
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs size={72} color="#84cf25" />,
    href: "https://nodejs.org/en/",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "Express",
    icon: <SiExpress size={72} color="black" />,
    href: "https://expressjs.com/",
    category: TechStackItemCategory.BACKEND_FRAMEWORK,
  },
  {
    title: "Nodemon",
    icon: <SiNodemon size={72} color="#76d04b" />,
    href: "https://www.npmjs.com/package/nodemon",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "MongoDB",
    icon: <SiMongodb size={72} color="#00ec64" />,
    href: "https://www.mongodb.com/",
    category: TechStackItemCategory.DATABASE,
  },
  {
    title: "Postman",
    icon: <SiPostman size={72} color="#f86936" />,
    href: "https://www.postman.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "MySQL",
    icon: <SiMysql size={72} color="#f86936" />,
    href: "https://www.mysql.com/",
    category: TechStackItemCategory.DATABASE,
  },
  {
    title: "HTML5",
    icon: <SiHtml5 size={72} color="#e34c26" />,
    href: "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    category: TechStackItemCategory.MARKUP_LANGUAGE,
  },
  {
    title: "CSS3",
    icon: <SiCss3 size={72} color="#264de4" />,
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    category: TechStackItemCategory.STYLE_SHEET_LANGUAGE,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={72} color={"#F0DB4F"} />,
    href: "https://www.javascript.com/",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript size={72} color="#007acc" />,
    href: "https://www.typescriptlang.org/",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "React",
    icon: <FaReact size={72} color="#61DBFB" />,
    href: "https://reactjs.org/",
    category: TechStackItemCategory.FRONTEND_FRAMEWORK,
  },
  {
    title: "Next.js",
    icon: <TbBrandNextjs size={72} color="black" />,
    href: "https://nextjs.org/",
    category: TechStackItemCategory.FRONTEND_FRAMEWORK,
  },
  {
    title: "Sass",
    icon: <SiSass size={72} color="#cd6799" />,
    href: "https://sass-lang.com/",
    category: TechStackItemCategory.CSS_PREPROCESSOR,
  },
  {
    title: "PostCSS",
    icon: <SiPostcss size={72} color="#DD3A0A" />,
    href: "https://postcss.org/",
    category: TechStackItemCategory.CSS_PREPROCESSOR,
  },
  {
    title: "Styled Components",
    icon: <SiStyledcomponents size={72} color="#e18187" />,
    href: "https://styled-components.com/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Bootstrap",
    icon: <SiBootstrap size={72} color="#563d7c" />,
    href: "https://getbootstrap.com/",
    category: TechStackItemCategory.CSS_FRAMEWORK,
  },
  {
    title: "Tailwind",
    icon: <SiTailwindcss size={72} color="#38bdf8" />,
    href: "https://tailwindcss.com/",
    category: TechStackItemCategory.CSS_FRAMEWORK,
  },
  {
    title: "MUI",
    icon: <SiMaterialui size={72} color="#38bdf8" />,
    href: "https://mui.com/",
    category: TechStackItemCategory.UI_KIT,
  },
  {
    title: "Framer Motion",
    icon: <SiFramer size={72} color="#00a4ff" />,
    href: "https://www.framer.com/motion/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "React Router",
    icon: <SiReactrouter size={72} color="#f94949" />,
    href: "https://reactrouter.com/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Redux",
    icon: <SiRedux size={72} color="#764abc" />,
    href: "https://redux.js.org/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Lodash",
    icon: <SiLodash size={72} color="#3193ff" />,
    href: "https://lodash.com/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "React Testing Library",
    icon: <SiTestinglibrary size={72} color="#aa0e0d" />,
    href: "https://testing-library.com/docs/react-testing-library/intro/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Jest",
    icon: <SiJest size={72} color="#944058" />,
    href: "https://jestjs.io/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "React Native",
    icon: <GrReactjs size={72} color="#61DBFB" />,
    href: "https://reactnative.dev/",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "Visual Basic",
    icon: <SiDotnet size={72} color="#5027d5" />,
    href: "https://learn.microsoft.com/en-us/dotnet/visual-basic/",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "C#",
    icon: <SiCsharp size={72} color="#953dac" />,
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "ABAP",
    icon: <SiSap size={72} color="#1873cc" />,
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "Slack",
    icon: <SiSlack size={72} color="#00bf7e" />,
    href: "https://slack.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Discord",
    icon: <SiDiscord size={72} color="#4a62fc" />,
    href: "https://discord.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Visual Studio Code",
    icon: <SiVisualstudiocode size={72} color="#2778b2" />,
    href: "https://code.visualstudio.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "IntelliJ IDEA",
    icon: <SiJetbrains size={72} color="#f72e5c" />,
    href: "https://www.jetbrains.com/idea/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Xcode",
    icon: <SiXcode size={72} color="#1950ef" />,
    href: "https://developer.apple.com/xcode/",
    category: TechStackItemCategory.SOFTWARE,
  },
];

const getItemsByCategory = (category: TechStackItemCategory) => {
  return techStackItems
    .filter((item) => item.category === TechStackItemCategory[category])
    .map(({ title, href }) => {
      return {
        label: title,
        href: href || "",
      };
    });
};

export const techStackDialogItems: TechStackDialogItems[] = Object.values(
  TechStackItemCategory
).map((ItemCategory) => {
  return {
    titleTrlKey: `TECH_STACK_${ItemCategory}` as keyof typeof texts,
    list: getItemsByCategory(TechStackItemCategory[ItemCategory]),
  };
});
