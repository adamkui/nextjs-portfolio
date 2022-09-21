import { Typography, Divider } from "@mui/material";
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

interface TimeLineDataProps {
  date: string;
  company: string;
  position: string;
  body: string;
  icon: ReactElement;
  align: "left" | "right";
}

const TimelineData: FC<TimeLineDataProps> = ({
  date,
  company,
  position,
  body,
  icon,
  align,
}) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align={align}
        variant="body2"
      >
        {date}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot>{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{ py: "12px", px: 2, display: "flex", flexDirection: "column" }}
      >
        <div
          className={cn("w-fit", align === "right" ? "self-start" : "self-end")}
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
  return (
    <Section
      title="Career 🏢"
      body="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum, quod id quidem unde expedita tenetur? Recusandae voluptatum iste harum adipisci tempora quia earum vero quas nulla quos, voluptas numquam mollitia, veritatis fugit illum repellat iusto soluta reprehenderit nesciunt! Fugit distinctio similique velit ut voluptate odit ea nihil repudiandae officiis reiciendis, quia dolorum deleniti, magni officia, a non architecto atque. Soluta!"
    >
      <Timeline position="alternate" className="mt-20">
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
        />
      </Timeline>
    </Section>
  );
};
