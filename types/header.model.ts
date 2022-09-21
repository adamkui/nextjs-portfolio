import { ReactElement } from "react";

export interface NavigationItemProps {
  label: string;
  href: string;
  icon?: null
}

export interface MenuItemProps {
  icon: ReactElement<any, any>;
  label: string;
  href: string;
}
