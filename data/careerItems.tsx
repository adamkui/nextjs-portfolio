import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import CarRentalIcon from "@mui/icons-material/CarRental";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { ReactElement } from "react";

enum AlignOptions {
  LEFT = "left",
  RIGHT = "right",
}

interface CareerItemProps {
  date: string;
  company: string;
  position: string;
  body: string;
  icon: ReactElement;
  align: AlignOptions;
  iconColor: string;
  topConnectorColor?: string;
  bottomConnectorColor?: string;
  chipContent?: string[];
}

export const careerItems: CareerItemProps[] = [
  {
    date: "Jun 2021 - Present",
    company: "Erste Bank Hungary",
    position: "Frontend Developer (Medior)",
    body: `Working as part of a huge project, creating a new online banking application group, actively used by 600.000 people in Hungary only, called George. I'm responsibile to work on two applications: George Store, which is an online sales platform, extended with some key features like free cash withdrawal options, or password change for the user. The other one is called George Admin, which is an internal tool for messaging, managing debit cards, and helping with some queries.`,
    icon: <AccountBalanceIcon />,
    align: AlignOptions.RIGHT,
    topConnectorColor: "#abe1fb",
    bottomConnectorColor: "#FF7513",
    iconColor: "#00497b",
    chipContent: ["React", "TypeScript", "NodeJS"],
  },
  {
    date: "Mar 2021 - May 2021",
    company: "Avis Budget Group",
    position: "Automation Developer (Senior)",
    body: `During my short career at Avis Budget Group, I mostly worked on refactoring old, untrusted code, and building infrastructure (SCM, CI/CD Pipeline, VDIs, etc.)`,
    icon: <CarRentalIcon />,
    align: AlignOptions.LEFT,
    topConnectorColor: "#FF7513",
    bottomConnectorColor: "#F01523",
    iconColor: "#FF7513",
    chipContent: ["VB.NET", "C#", "SQL", "UiPath", "Oracle"],
  },
  {
    date: "Jan 2018 - Feb 2021",
    company: "ExxonMobil",
    position: "Shared Services Developer",
    body: `I worked on multiple projects at ExxonMobil. I started at Procurement IT, working on complex RPA projects, many having benefits over 2FTEs, and some $500k/year. I've learnt a lot from more senior colleagues there. After the RPA project was reorganized, I got into an internal ABAP training, and got a developer role in the company, for a short amount of time.`,
    icon: <OilBarrelIcon />,
    align: AlignOptions.RIGHT,
    topConnectorColor: "#F01523",
    bottomConnectorColor: "#3B73B9",
    iconColor: "#F01523",
    chipContent: ["VB.NET", "C#", "UiPath", "ABAP", "SAP", "SQL"],
  },
  {
    date: "Jul 2017 - Dec 2017",
    company: "GE Global Operations",
    position: "RPA Developer Intern",
    body: `I started working at GE as an intern, during my studies. I was responsible for a few smaller development projects, all of them with around 0.5-1 FTE benefits.`,
    icon: <PrecisionManufacturingIcon />,
    align: AlignOptions.LEFT,
    topConnectorColor: "#3B73B9",
    iconColor: "#3B73B9",
    chipContent: ["VB.NET", "UiPath"],
  },
];
