import MenuIcon from "@mui/icons-material/Menu";
import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import cn from "classnames";
import Link from "next/link";
import { FC, MouseEvent, useState } from "react";
import { useSelector } from "react-redux";

import { NavigationProvider } from "../Constants/navigation";

export const MobileNavigation: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const { NAV_ITEMS, LINKS_MENU_ITEMS } = NavigationProvider();

  const handleToggleMobileNavigationMenu = (
    event: MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="md:hidden">
      <button
        className={cn(
          "border border-solid rounded-md p-1",
          isDarkMode ? "border-white" : "border-black"
        )}
        onClick={handleToggleMobileNavigationMenu}
      >
        <MenuIcon />
      </button>
      <Menu
        className="md:hidden"
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiPaper-root": {
            backgroundColor: isDarkMode ? "rgb(30 41 59)" : "",
            color: isDarkMode ? "white" : "",
          },
        }}
      >
        {[...NAV_ITEMS, ...LINKS_MENU_ITEMS]?.map(({ label, href, icon }) => {
          return !icon ? (
            <Link href={href}>
              <MenuItem
                key={label}
                onClick={handleClose}
                className="flex"
                sx={{ width: 170 }}
              >
                {label}
              </MenuItem>
            </Link>
          ) : (
            <MenuItem
              key={label}
              onClick={handleClose}
              className="flex"
              sx={{ width: 170 }}
            >
              <ListItemIcon>{icon}</ListItemIcon>
              <a href={href} target={"_blank"}>
                {label}
              </a>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};