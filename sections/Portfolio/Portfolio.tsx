import { FC, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import {
  PortfolioViewMode,
  ViewSwitch,
} from "components/ViewSwitch/ViewSwitch";
import { useGetText } from "hooks";
import { PortfolioGrid } from "./PortfolioGrid";
import { PortfolioList } from "./PortfolioList";
import { Typography } from "@mui/material";
import { TextUnderline } from "components/index";

export const Portfolio: FC = () => {
  const t = useGetText();

  const [viewMode, setViewMode] = useState<PortfolioViewMode>(
    PortfolioViewMode.GRID
  );

  const PortfolioPerView = {
    [PortfolioViewMode.GRID]: <PortfolioGrid />,
    [PortfolioViewMode.LIST]: <PortfolioList />,
  };

  return (
    <>
      <ViewSwitch viewMode={viewMode} setViewMode={setViewMode} />
      <AnimatePresence mode="wait">
        <motion.div
          key={viewMode}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.25,
          }}
          variants={{
            initialState: {
              opacity: 0,
            },
            animateState: {
              opacity: 1,
            },
            exitState: {
              opacity: 0,
            },
          }}
        >
          {PortfolioPerView[viewMode]}
        </motion.div>
      </AnimatePresence>
    </>
  );
};
