import { Typography, Divider, Grid, Chip, Stack } from "@mui/material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { FC, ReactElement } from "react";
import { useSelector } from "react-redux";
import CarRentalIcon from "@mui/icons-material/CarRental";
import cn from "classnames";
import OilBarrelIcon from "@mui/icons-material/OilBarrel";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
import { Section } from "../Section/Section";
import { useWindowSize } from "../Hooks/useWindowSize";

interface TimeLineDataProps {
  date: string;
  company: string;
  position: string;
  body: string;
  icon: ReactElement;
  align: "left" | "right";
  iconColor: string;
  topConnectorColor?: string;
  bottomConnectorColor?: string;
  chipContent?: string[];
}

interface CompanyLogo {
  img: ReactElement;
}

const TimelineData: FC<TimeLineDataProps> = ({
  date,
  company,
  position,
  body,
  icon,
  align,
  topConnectorColor,
  bottomConnectorColor,
  iconColor,
  chipContent,
}) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const { underSm } = useWindowSize();

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align={align}
        variant="body2"
        className={cn({ hidden: underSm })}
      >
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector sx={{ bgcolor: topConnectorColor }} />
        <TimelineDot sx={{ bgcolor: iconColor }}>{icon}</TimelineDot>
        <TimelineConnector sx={{ bgcolor: bottomConnectorColor }} />
      </TimelineSeparator>
      <TimelineContent
        sx={{ py: "12px", px: 2, display: "flex", flexDirection: "column" }}
      >
        <div
          className={cn(
            "w-fit",
            align === "right" || underSm ? "self-start" : "self-end"
          )}
        >
          <Typography variant="h5" component="span" align={"right"}>
            {company}
          </Typography>
          <Divider
            sx={{
              bgcolor: isDarkMode ? "white" : "rgb(30 41 59)",
            }}
          />
        </div>
        <Typography variant="subtitle1">{position}</Typography>
        {underSm ? (
          <Typography
            variant="subtitle2"
            className={cn(isDarkMode ? "text-slate-400" : "text-slate-700")}
          >
            {date}
          </Typography>
        ) : null}
        {chipContent && !underSm ? (
          <Grid
            container
            spacing={1}
            className={cn("mt-3 w-fit", { "self-end": align !== "right" })}
          >
            {chipContent.map((label) => {
              return (
                <Grid item>
                  <Chip
                    label={label}
                    variant="outlined"
                    className={cn({ "text-white": isDarkMode })}
                  />
                </Grid>
              );
            })}
          </Grid>
        ) : null}
        <Typography
          variant="body1"
          className={cn(
            "bg-white border border-solid backdrop-blur-lg rounded-md w-fit px-3 py-2 mt-3",
            isDarkMode
              ? " bg-opacity-5 border-transparent"
              : "bg-opacity-100 border-grey",
            align === "right" ? "self-start" : "self-end"
          )}
        >
          {body}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
};

export const Career: FC = () => {
  const { underSm } = useWindowSize();
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  const companyLogos: CompanyLogo[] = [
    { img: <img src="erste-logo.png" alt="Erste_Logo" className="p-7" /> },
    { img: <img src="abg-logo.png" alt="Abg_Logo" /> },
    { img: <img src="exxon-logo.png" alt="Exxon_Logo" className="pt-3" /> },
    { img: <img src="ge-logo.png" alt="Ge_Logo" className="p-10" /> },
  ];

  return (
    <Section
      title="Career 🏢"
      body="My journey started when I joined General Electric in 2017, as a Robotic 🤖 Process Automation Developer (RPA) Intern.  I met, and also did programming before, but even though doing RPA is not a tipical 'write code in an IDE' job, I fell in love with learning programming. 👨‍💻 I started to become more and more motived, and in a few years I got to a senior 👴 level in RPA. However, I felt like I had much more in me, and I really wanted to learn something new. So in 2020 I started to look for new opportunities, when I came accross frontend development. I quickly fell in love 😍 with it. I've spent more than a year coding 8-12 hours after work during the nigth, working on hobby projects while I was studying from online courses. First just HTML + CSS, then JavaScript, and then only frameworks and a bunch of libraries. Today I mostly enjoy working on React / Next.js projects (like this website). For the future I definitely want to learn more about SSR, other frontend frameworks (Angular and Vue), and who knows what else the future will bring! 🤓"
      className="mb-10"
    >
      <Timeline position={underSm ? "right" : "alternate"} className="mt-20">
        <TimelineData
          date={"Jun 2021 - Present"}
          company={"Erste Bank Hungary"}
          position="Frontend Developer (Medior)"
          body={`Working as part of a huge project, creating a new online banking application group, actively used by 600.000 people in Hungary only, called George. I'm responsibile to work on two applications: George Store, which is an online sales platform, extended with some key features like free cash withdrawal options, or password change for the user. The other one is called George Admin, which is an internal tool for messaging, managing debit cards, and helping with some queries.`}
          icon={<AccountBalanceIcon htmlColor="" />}
          align={"right"}
          topConnectorColor={"#abe1fb"}
          bottomConnectorColor={"#FF7513"}
          iconColor={"#00497b"}
          chipContent={["React", "TypeScript", "NodeJS"]}
        />
        <TimelineData
          date={"Mar 2021 - May 2021"}
          company={"Avis Budget Group"}
          position="Automation Developer (Senior)"
          body={`During my short career at Avis Budget Group, I mostly worked on refactoring old, untrusted code, and building infrastructure (SCM, CI/CD Pipeline, VDIs, etc.)`}
          icon={<CarRentalIcon htmlColor="" />}
          align={"left"}
          topConnectorColor={"#FF7513"}
          bottomConnectorColor={"#F01523"}
          iconColor={"#FF7513"}
          chipContent={["VB.NET", "C#", "SQL", "UiPath", "Oracle"]}
        />
        <TimelineData
          date={"Jan 2018 - Feb 2021"}
          company={"ExxonMobil"}
          position="Shared Services Developer"
          body={`I worked on multiple projects at ExxonMobil. I started at Procurement IT, working on complex RPA projects, many having benefits over 2FTEs, and some $500k/year. I've learnt a lot from more senior colleagues there. After the RPA project was reorganized, I got into an internal ABAP training, and got a developer role in the company, for a short amount of time.`}
          icon={<OilBarrelIcon htmlColor="" />}
          align={"right"}
          topConnectorColor={"#F01523"}
          bottomConnectorColor={"#3B73B9"}
          iconColor={"#F01523"}
          chipContent={["VB.NET", "C#", "UiPath", "ABAP", "SAP", "SQL"]}
        />
        <TimelineData
          date={"Jul 2017 - Dec 2017"}
          company={"GE Global Operations"}
          position="RPA Developer Intern"
          body={`I started working at GE as an intern, during my studies. I was responsible for a few smaller development projects, all of them with around 0.5-1 FTE benefits.`}
          icon={<PrecisionManufacturingIcon htmlColor="" />}
          align={"left"}
          topConnectorColor={"#3B73B9"}
          iconColor={"#3B73B9"}
          chipContent={["VB.NET", "UiPath"]}
        />
      </Timeline>
      <Grid container className="items-center justify-center mt-10" gap={0}>
        {companyLogos.map(({ img }) => {
          return underSm ? null : (
            <Grid
              item
              sm={6}
              md={4}
              lg={3}
              className={cn("p-10", { invert: isDarkMode })}
            >
              {img}
            </Grid>
          );
        })}
      </Grid>
    </Section>
  );
};
