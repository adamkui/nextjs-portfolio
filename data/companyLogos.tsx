import { ReactElement } from "react";

interface CompanyLogo {
  img: ReactElement;
}

export const companyLogos: CompanyLogo[] = [
  {
    img: (
      <img
        src="assets/images/erste-logo.webp"
        alt="Erste_Logo"
        className="p-7"
      />
    ),
  },
  { img: <img src="assets/images/abg-logo.webp" alt="Abg_Logo" /> },
  {
    img: (
      <img
        src="assets/images/exxon-logo.webp"
        alt="Exxon_Logo"
        className="pt-3"
      />
    ),
  },
  {
    img: (
      <img src="assets/images/ge-logo.webp" alt="Ge_Logo" className="p-10" />
    ),
  },
];
