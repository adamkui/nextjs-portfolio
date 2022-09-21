import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Paper from "@mui/material/Paper";
import { FC, MouseEvent, useState } from "react";
import { useSelector } from "react-redux";
import { NavigationProvider } from "../Constants/navigation";

export const LinksMenu: FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const { LINKS_MENU_ITEMS } = NavigationProvider();

  const handleToggleLinksMenu = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <button
        className="mx-5"
        onClick={handleToggleLinksMenu}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        {"Links"}
      </button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{
          "& .MuiList-root": {
            padding: 0,
          },
          "& .MuiPaper-root": {
            backgroundColor: "transparent",
          },
        }}
      >
        <Paper
          className={isDarkMode ? "bg-slate-800" : "bg-white"}
          sx={{
            width: 210,
            maxWidth: "100%",
            backgroundColor: "transparent",
          }}
        >
          <MenuList
            className={isDarkMode ? "bg-slate-800 text-white" : "bg-white"}
          >
            {LINKS_MENU_ITEMS.map(({ icon, label, href }) => {
              return (
                <MenuItem
                  key={label}
                  onClick={handleClose}
                  sx={{ paddingY: 1 }}
                >
                  <a
                    href={href}
                    target="_blank"
                    className="flex w-full items-center"
                  >
                    <ListItemIcon>{icon}</ListItemIcon>
                    <ListItemText
                      className="ml-1"
                      sx={{
                        "& .MuiListItemText-primary": {
                          lineHeight: 1,
                        },
                      }}
                    >
                      {label}
                    </ListItemText>
                    <OpenInNewIcon sx={{ fontSize: 20 }} />
                  </a>
                </MenuItem>
              );
            })}
          </MenuList>
        </Paper>
      </Menu>
    </>
  );
};
