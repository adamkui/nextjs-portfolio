import { Typography } from "@mui/material";
import { FC } from "react";
import { useSelector } from "react-redux";
import cn from "classnames";

export const TechStack: FC = () => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <section className="mx-16 mb-20">
      <Typography
        variant="h5"
        className="mb-10 underline underline-offset-8 decoration-4"
      >
        Tech Stack
      </Typography>
      <Typography
        variant="body1"
        className={cn(
          "bg-white border border-solid backdrop-blur-lg rounded-md w-fit px-2 py-1 mt-3",
          isDarkMode
            ? " bg-opacity-5 border-transparent"
            : "bg-opacity-100 border-grey"
        )}
      >
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tenetur
        nobis accusamus culpa expedita, laudantium dolores asperiores
        reprehenderit deleniti assumenda maxime voluptatem quod earum officia
        omnis ab est facere nihil nemo neque tempora incidunt. Quisquam
        accusamus inventore eum iste nulla iusto suscipit est id sapiente
        delectus animi amet a aliquid, rerum libero quaerat saepe beatae nam
        voluptates nihil consequatur accusantium?
      </Typography>
    </section>
  );
};
