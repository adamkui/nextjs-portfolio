import DevicesIcon from "@mui/icons-material/Devices";
import Link from "next/link";
import { FC } from "react";

import { useGetText } from "hooks";

export const Logo: FC = () => {
  const t = useGetText();

  return (
    <li>
      <Link href="/">
        <div className="cursor-pointer flex items-center">
          <DevicesIcon className="mr-3" sx={{ fontSize: 26 }} />
          <h1 className="font-bold text-2xl font-gugi">{t("LOGO")}</h1>
        </div>
      </Link>
    </li>
  );
};
