import { Typography } from "@mui/material";
import cn from "classnames";
import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";

interface SectionProps {
  title: string;
  body?: string;
  children?: ReactNode;
  className?: string;
}

export const Section: FC<SectionProps> = ({
  title,
  body,
  children,
  className,
}) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);

  return (
    <section className="flex w-full justify-center">
      <div className={cn("mx-5 xs:mx-8 sm:mx-16 max-w-7xl", className)}>
        <Typography
          variant="h5"
          className="mb-10 underline underline-offset-8 decoration-4 mr-3"
        >
          {title}
        </Typography>
        {body ? (
          <Typography
            variant="body1"
            className={cn(
              "bg-white border border-solid backdrop-blur-lg rounded-md w-fit px-3 py-2 mt-3",
              isDarkMode
                ? " bg-opacity-5 border-transparent"
                : "bg-opacity-100 border-grey"
            )}
          >
            {body}
          </Typography>
        ) : null}
        {children}
      </div>
    </section>
  );
};
