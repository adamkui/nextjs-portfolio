import { sortBy } from "lodash";
import { ReactElement } from "react";
import { FaReact, FaSourcetree } from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import {
  SiAzuredevops,
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
  SiHeroku,
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

export enum TechStackItemCategory {
  "MARKUP_LANGUAGE" = "MARKUP_LANGUAGE",
  "STYLE_SHEET_LANGUAGE" = "STYLE_SHEET_LANGUAGE",
  "CSS_FRAMEWORK" = "CSS_FRAMEWORK",
  "CSS_PREPROCESSOR" = "CSS_PREPROCESSOR",
  "PROGRAMMING_LANGUAGE" = "PROGRAMMING_LANGUAGE",
  "MOBILE_DEVELOPMENT" = "MOBILE_DEVELOPMENT",
  "FRONTEND_FRAMEWORK" = "FRONTEND_FRAMEWORK",
  "FRONTEND_LIBRARY" = "FRONTEND_LIBRARY",
  "UI_KIT" = "UI_KIT",
  "RUNTIME_ENVIRONMENT" = "RUNTIME_ENVIRONMENT",
  "BACKEND_FRAMEWORK" = "BACKEND_FRAMEWORK",
  "BACKEND_LIBRARY" = "BACKEND_LIBRARY",
  "DATABASE" = "DATABASE",
  "PACKAGE_MANAGER" = "PACKAGE_MANAGER",
  "VERSION_CONTROL_SYSTEM" = "VERSION_CONTROL_SYSTEM",
  "SOFTWARE" = "SOFTWARE",
  "HOSTING" = "HOSTING",
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
    title: "Homebrew",
    href: "https://brew.sh/",
    category: TechStackItemCategory.PACKAGE_MANAGER,
  },
  {
    title: "Npm",
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
    title: "Svn",
    href: "https://subversion.apache.org/",
    category: TechStackItemCategory.VERSION_CONTROL_SYSTEM,
  },
  {
    title: "TFVC",
    href: "https://learn.microsoft.com/en-us/azure/devops/repos/tfvc/what-is-tfvc?view=azure-devops",
    category: TechStackItemCategory.VERSION_CONTROL_SYSTEM,
    icon: <SiAzuredevops size={72} color="#0273d3" />,
  },
  {
    title: "ABAP",
    icon: <SiSap size={72} color="#1873cc" />,
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "C#",
    icon: <SiCsharp size={72} color="#953dac" />,
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "JavaScript",
    icon: <SiJavascript size={72} color={"#F0DB4F"} />,
    href: "https://www.javascript.com/",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "Netlify",
    icon: <SiNetlify size={72} color="#2ebcbc" />,
    href: "https://www.netlify.com/",
    category: TechStackItemCategory.HOSTING,
  },
  {
    title: "Vercel",
    icon: <SiVercel size={72} color="black" />,
    href: "https://vercel.com/",
    category: TechStackItemCategory.HOSTING,
  },
  {
    title: "Heroku",
    icon: <SiHeroku size={72} color="#79589f" />,
    href: "https://www.heroku.com/",
    category: TechStackItemCategory.HOSTING,
  },
  {
    title: "Cyclic",
    href: "https://www.cyclic.sh/",
    category: TechStackItemCategory.HOSTING,
  },
  {
    title: "Node.js",
    icon: <SiNodedotjs size={72} color="#84cf25" />,
    href: "https://nodejs.org/en/",
    category: TechStackItemCategory.RUNTIME_ENVIRONMENT,
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
    title: "Headless UI",
    href: "https://headlessui.com/",
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
    category: TechStackItemCategory.MOBILE_DEVELOPMENT,
  },
  {
    title: "Visual Basic",
    icon: <SiDotnet size={72} color="#5027d5" />,
    href: "https://learn.microsoft.com/en-us/dotnet/visual-basic/",
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
  {
    title: "Sourcetree",
    icon: <FaSourcetree size={72} color="#2684ff" />,
    href: "https://www.sourcetreeapp.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
];

const getItemsByCategory = (category: TechStackItemCategory) => {
  return sortBy(techStackItems, ["title"])
    .filter((item) => item.category === category)
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
    list: getItemsByCategory(ItemCategory),
  };
});
