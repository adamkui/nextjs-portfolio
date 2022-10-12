import { sortBy } from "lodash";
import { ReactElement } from "react";
import { FaReact } from "react-icons/fa";
import {
  SiBootstrap,
  SiCss3,
  SiExpress,
  SiFramer,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiLodash,
  SiMaterialui,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostcss,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { texts } from ".";

export enum TechStackItemCategory {
  "MARKUP_LANGUAGE" = "MARKUP_LANGUAGE",
  "STYLE_SHEET_LANGUAGE" = "STYLE_SHEET_LANGUAGE",
  "CSS_PREPROCESSOR" = "CSS_PREPROCESSOR",
  "CSS_FRAMEWORK" = "CSS_FRAMEWORK",
  "PROGRAMMING_LANGUAGE" = "PROGRAMMING_LANGUAGE",
  "FRONTEND_FRAMEWORK" = "FRONTEND_FRAMEWORK",
  "FRONTEND_LIBRARY" = "FRONTEND_LIBRARY",
  "UI_KIT" = "UI_KIT",
  "RUNTIME_ENVIRONMENT" = "RUNTIME_ENVIRONMENT",
  "BACKEND_FRAMEWORK" = "BACKEND_FRAMEWORK",
  "BACKEND_LIBRARY" = "BACKEND_LIBRARY",
  "DATABASE" = "DATABASE",
  "MOBILE_DEVELOPMENT" = "MOBILE_DEVELOPMENT",
  "PACKAGE_MANAGER" = "PACKAGE_MANAGER",
  "VERSION_CONTROL_SYSTEM" = "VERSION_CONTROL_SYSTEM",
  "SOFTWARE" = "SOFTWARE",
  "HOSTING" = "HOSTING",
  "CMS" = "CMS",
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
    href: "https://www.npmjs.com/",
    category: TechStackItemCategory.PACKAGE_MANAGER,
  },
  {
    title: "Yarn",
    href: "https://yarnpkg.com/",
    category: TechStackItemCategory.PACKAGE_MANAGER,
  },
  {
    title: "Git",
    href: "https://git-scm.com/",
    category: TechStackItemCategory.VERSION_CONTROL_SYSTEM,
  },
  {
    title: "GitHub",
    href: "https://github.com/",
    category: TechStackItemCategory.VERSION_CONTROL_SYSTEM,
  },
  {
    title: "GitLab",
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
  },
  {
    title: "ABAP",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },
  {
    title: "C#",
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
    href: "https://www.netlify.com/",
    category: TechStackItemCategory.HOSTING,
  },
  {
    title: "Vercel",
    href: "https://vercel.com/",
    category: TechStackItemCategory.HOSTING,
  },
  {
    title: "Heroku",
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
    title: "Material UI",
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
    href: "https://reactnative.dev/",
    category: TechStackItemCategory.MOBILE_DEVELOPMENT,
  },
  {
    title: "Visual Basic",
    href: "https://learn.microsoft.com/en-us/dotnet/visual-basic/",
    category: TechStackItemCategory.PROGRAMMING_LANGUAGE,
  },

  {
    title: "Slack",
    href: "https://slack.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Discord",
    href: "https://discord.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Visual Studio Code",
    href: "https://code.visualstudio.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "IntelliJ IDEA",
    href: "https://www.jetbrains.com/idea/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Xcode",
    href: "https://developer.apple.com/xcode/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Sourcetree",
    href: "https://www.sourcetreeapp.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Formik",
    href: "https://formik.org/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Axios",
    href: "https://axios-http.com/docs/intro",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Classnames",
    href: "https://www.npmjs.com/package/classnames",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "http-proxy-middleware",
    href: "https://www.npmjs.com/package/http-proxy-middleware",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "i18next",
    href: "https://www.i18next.com/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-i18next",
    href: "https://react.i18next.com/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "loglevel",
    href: "https://www.npmjs.com/package/loglevel",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "query-string",
    href: "https://www.npmjs.com/package/query-string",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "React Helmet",
    href: "https://www.npmjs.com/package/react-helmet",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "date-fns",
    href: "https://date-fns.org/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-app-polyfill",
    href: "https://www.npmjs.com/package/react-app-polyfill",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-dates",
    href: "https://www.npmjs.com/package/react-dates",
    category: TechStackItemCategory.UI_KIT,
  },
  {
    title: "react-gtm-module",
    href: "https://www.npmjs.com/package/react-gtm-module",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-pdf",
    href: "https://www.npmjs.com/package/react-pdf",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-transition-group",
    href: "https://www.npmjs.com/package/react-transition-group",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Redux Thunk",
    href: "https://www.npmjs.com/package/redux-thunk",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "sanitize-html",
    href: "https://www.npmjs.com/package/sanitize-html",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "uuid",
    href: "https://www.npmjs.com/package/uuid",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "yup",
    href: "https://www.npmjs.com/package/yup",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "file-saver",
    href: "https://www.npmjs.com/package/file-saver",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-csv-reader",
    href: "https://www.npmjs.com/package/react-csv-reader",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-intersection-observer",
    href: "https://www.npmjs.com/package/react-intersection-observer",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "React Date Picker",
    href: "https://www.npmjs.com/package/react-datepicker",
    category: TechStackItemCategory.UI_KIT,
  },
  {
    title: "react-dropzone",
    href: "https://www.npmjs.com/package/react-dropzone",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-paginate",
    href: "https://www.npmjs.com/package/react-paginate",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-quill",
    href: "https://www.npmjs.com/package/react-quill",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-select",
    href: "https://www.npmjs.com/package/react-select",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "crypto-js",
    href: "https://www.npmjs.com/package/crypto-js",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "dotenv",
    href: "https://www.npmjs.com/package/dotenv",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "json-server",
    href: "https://www.npmjs.com/package/json-server",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "Ui Path",
    href: "https://www.uipath.com/product/studio",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "MuleSoft",
    href: "https://www.mulesoft.com/",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "Chromium",
    href: "https://www.npmjs.com/package/chromium",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "Discord.js",
    href: "https://discord.js.org/#/",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "Puppeteer",
    href: "https://pptr.dev/",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "react-responsive",
    href: "https://www.npmjs.com/package/react-responsive",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "chart.js",
    href: "https://www.chartjs.org/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "node-fetch",
    href: "https://www.npmjs.com/package/node-fetch",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "Strapi",
    href: "https://strapi.io/",
    category: TechStackItemCategory.CMS,
  },
  {
    title: "Cloudinary",
    href: "https://cloudinary.com/",
    category: TechStackItemCategory.CMS,
  },
  {
    title: "Knex.js",
    href: "https://knexjs.org/",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "node-postgre",
    href: "https://www.npmjs.com/package/pg",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "Slugify",
    href: "https://www.npmjs.com/package/slugify",
    category: TechStackItemCategory.BACKEND_LIBRARY,
  },
  {
    title: "Cookie",
    href: "https://www.npmjs.com/package/cookie",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Moment.js",
    href: "https://momentjs.com/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-geocode",
    href: "https://www.npmjs.com/package/react-geocode",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-map-gl",
    href: "https://www.npmjs.com/package/react-map-gl",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-icons",
    href: "https://www.npmjs.com/package/react-icons",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "react-toastify",
    href: "https://www.npmjs.com/package/react-icons",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Expo",
    href: "https://expo.dev/",
    category: TechStackItemCategory.MOBILE_DEVELOPMENT,
  },
  {
    title: "React Native Paper",
    href: "https://reactnativepaper.com/",
    category: TechStackItemCategory.UI_KIT,
  },
  {
    title: "Recharts",
    href: "https://recharts.org/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Evergreen",
    href: "https://evergreen.segment.com/",
    category: TechStackItemCategory.UI_KIT,
  },
  {
    title: "GraphQL",
    href: "https://graphql.org/",
    icon: <SiGraphql size={72} color="#E00398" />,
    category: TechStackItemCategory.DATABASE,
  },
  {
    title: "React Slick",
    href: "https://react-slick.neostack.com/",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Markdown",
    href: "https://www.markdownguide.org/",
    category: TechStackItemCategory.MARKUP_LANGUAGE,
  },
  {
    title: "react-markdown",
    href: "https://github.com/remarkjs/react-markdown",
    category: TechStackItemCategory.FRONTEND_LIBRARY,
  },
  {
    title: "Jira",
    href: "https://www.atlassian.com/software/jira",
    category: TechStackItemCategory.SOFTWARE,
  },
  {
    title: "George Design System",
    href: "https://designsystem.george-labs.com/",
    category: TechStackItemCategory.UI_KIT,
  },
];

const getItemsByCategory = (category: TechStackItemCategory) => {
  return sortBy(techStackItems, [(item) => item.title.toLowerCase()])
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
