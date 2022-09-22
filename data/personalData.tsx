import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import PlaceIcon from "@mui/icons-material/Place";
import { ReactElement } from "react";

interface PersonalDataProps {
  label: string;
  icon: ReactElement<any, any>;
}

export const personalData: PersonalDataProps[] = [
  {
    label: "Budapest, Hungary",
    icon: <PlaceIcon />,
  },
  {
    label: "addam.kui@gmail.com",
    icon: <AlternateEmailIcon />,
  },
  {
    label: "Download my CV",
    icon: <CloudDownloadIcon />,
  },
];
