import { Typography } from "@mui/material";
import cn from "classnames";
import Link from "next/link";
import { FC, ReactElement, ReactNode } from "react";

interface SectionProps {
  title: string;
  body?: string | ReactElement;
  children?: ReactNode;
  className?: string;
  titleClassName?: string;
  fullWidth?: boolean;
  titleHref?: string;
}

export const Section: FC<SectionProps> = ({
  title,
  body,
  children,
  className,
  titleClassName,
  fullWidth,
  titleHref,
}) => {
  return (
    <section className="flex w-full justify-center">
      <div
        className={cn("mx-5 xs:mx-8 sm:mx-16 max-w-7xl", className, {
          "w-full": fullWidth,
        })}
      >
        <div className="w-fit mb-10">
          {titleHref ? (
            <Link href={titleHref}>
              <Typography
                variant="h5"
                className={cn(
                  "w-fit mb-1 bg-clip-text cursor-pointer",
                  titleClassName
                )}
              >
                {title}
              </Typography>
            </Link>
          ) : (
            <Typography
              variant="h5"
              className={cn("w-fit mb-1 bg-clip-text", titleClassName)}
            >
              {title}
            </Typography>
          )}
          <span
            className={cn(
              "block h-1.5 w-full bg-gradient-to-r from-sky-600 to-cyan-500"
            )}
          ></span>
        </div>
        {body ? (
          <Typography
            variant="body1"
            className={cn(
              "bg-white border border-solid backdrop-blur-lg rounded-md px-3 py-2 mt-3 bg-opacity-100 border-grey dark:bg-opacity-5 dark:border-transparent",
              fullWidth ? "w-full" : "w-fit"
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
