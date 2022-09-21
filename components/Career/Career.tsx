import { Typography, Divider, Grid } from "@mui/material";
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
    {
      img: <img src="erste-logo.png" alt="Erste_Logo" className="p-7" />,
    },
    { img: <img src="abg-logo.png" alt="Abg_Logo" /> },
    { img: <img src="exxon-logo.png" alt="Exxon_Logo" className="pt-3" /> },
    { img: <img src="ge-logo.png" alt="Ge_Logo" className="p-10" /> },
  ];

  return (
    <Section
      title="Career 🏢"
      body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quod id quidem unde expedita tenetur? Recusandae voluptatum iste harum adipisci tempora quia earum vero quas nulla quos, voluptas numquam mollitia, veritatis fugit illum repellat iusto soluta reprehenderit nesciunt! Fugit distinctio similique velit ut voluptate odit ea nihil repudiandae officiis reiciendis, quia dolorum deleniti, magni officia, a non architecto atque. Soluta!"
      className="mb-10"
    >
      <Timeline position={underSm ? "right" : "alternate"} className="mt-20">
        <TimelineData
          date={"Jun 2021 - Present"}
          company={"Erste Bank Hungary"}
          position="Frontend Developer (Medior)"
          body={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
            quod id quidem unde expedita tenetur? Recusandae voluptatum iste harum
            adipisci tempora quia earum vero quas nulla quos, voluptas numquam
            mollitia, veritatis fugit illum repellat iusto soluta reprehenderit
            nesciunt!`}
          icon={<AccountBalanceIcon htmlColor="" />}
          align={"right"}
          topConnectorColor={"#abe1fb"}
          bottomConnectorColor={"#FF7513"}
          iconColor={"#00497b"}
        />
        <TimelineData
          date={"Mar 2021 - May 2021"}
          company={"Avis Budget Group"}
          position="Automation Developer (Senior)"
          body={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
            quod id quidem unde expedita tenetur? Recusandae voluptatum iste harum
            adipisci tempora quia earum vero quas nulla quos, voluptas numquam
            mollitia, veritatis fugit illum repellat iusto soluta reprehenderit
            nesciunt!`}
          icon={<CarRentalIcon htmlColor="" />}
          align={"left"}
          topConnectorColor={"#FF7513"}
          bottomConnectorColor={"#F01523"}
          iconColor={"#FF7513"}
        />
        <TimelineData
          date={"Jan 2018 - Feb 2021"}
          company={"ExxonMobil"}
          position="Shared Services Developer"
          body={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
            quod id quidem unde expedita tenetur? Recusandae voluptatum iste harum
            adipisci tempora quia earum vero quas nulla quos, voluptas numquam
            mollitia, veritatis fugit illum repellat iusto soluta reprehenderit
            nesciunt!`}
          icon={<OilBarrelIcon htmlColor="" />}
          align={"right"}
          topConnectorColor={"#F01523"}
          bottomConnectorColor={"#3B73B9"}
          iconColor={"#F01523"}
        />
        <TimelineData
          date={"Jul 2017 - Dec 2017"}
          company={"GE Global Operations"}
          position="RPA Developer Intern"
          body={`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum,
            quod id quidem unde expedita tenetur? Recusandae voluptatum iste harum
            adipisci tempora quia earum vero quas nulla quos, voluptas numquam
            mollitia, veritatis fugit illum repellat iusto soluta reprehenderit
            nesciunt!`}
          icon={<PrecisionManufacturingIcon htmlColor="" />}
          align={"left"}
          topConnectorColor={"#3B73B9"}
          iconColor={"#3B73B9"}
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
