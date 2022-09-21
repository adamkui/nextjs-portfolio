import { ReactElement } from "react";

export interface NavigationItemProps {
  label: string;
  href: string;
  icon?: ReactElement<any, any>;
}

export interface MenuItemProps {
  icon: ReactElement<any, any>;
  label: string;
  href: string;
}
