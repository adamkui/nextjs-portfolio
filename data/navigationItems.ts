interface NavigationItemProps {
  label: string;
  href: string;
  icon?: null;
}

export const navigationItems: NavigationItemProps[] = [
  { label: "About", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog", href: "/blog" },
];
