import { ReactElement } from "react";

interface CompanyLogo {
  img: ReactElement;
}

export const companyLogos: CompanyLogo[] = [
  { img: <img src="erste-logo.png" alt="Erste_Logo" className="p-7" /> },
  { img: <img src="abg-logo.png" alt="Abg_Logo" /> },
  { img: <img src="exxon-logo.png" alt="Exxon_Logo" className="pt-3" /> },
  { img: <img src="ge-logo.png" alt="Ge_Logo" className="p-10" /> },
];
