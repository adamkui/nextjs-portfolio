import {
  Button,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Dispatch, FC, SetStateAction } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import AppsIcon from "@mui/icons-material/Apps";
import ListIcon from "@mui/icons-material/List";

export enum PortfolioViewMode {
  GRID = "GRID",
  LIST = "LIST",
}

interface ViewSwitchProps {
  viewMode: PortfolioViewMode;
  setViewMode: Dispatch<SetStateAction<PortfolioViewMode>>;
}

export const ViewSwitch: FC<ViewSwitchProps> = ({ viewMode, setViewMode }) => {
  const handleChange = (
    _: React.MouseEvent<HTMLElement>,
    newViewMode: PortfolioViewMode | null
  ) => {
    if (newViewMode === null) return;

    setViewMode(newViewMode);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="mx-5 xs:mx-8 sm:mx-16 max-w-7xl w-full flex justify-end mt-20">
        <ToggleButtonGroup
          value={viewMode}
          exclusive
          onChange={handleChange}
          aria-label={"View mode"}
        >
          <ToggleButton value={PortfolioViewMode.GRID} aria-label={"Grid"}>
            <AppsIcon />
          </ToggleButton>
          <ToggleButton value={PortfolioViewMode.LIST} aria-label={"List"}>
            <ListIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
    </div>
  );
};
