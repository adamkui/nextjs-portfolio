import { Grid, Pagination } from "@mui/material";
import { chunk } from "lodash";
import { ChangeEvent, FC, Fragment, useState } from "react";
import { useSelector } from "react-redux";

import { FileData } from "models";
import { BlogArticleSummary, ScrollUpButton } from "..";

interface PaginatedBlogArticlesProps {
  filesData: FileData[];
}

const PAGINATION_CHUNK_SIZE = 5;

export const PaginatedBlogArticles: FC<PaginatedBlogArticlesProps> = ({
  filesData,
}) => {
  const { isDarkMode } = useSelector((state: ApplicationState) => state.common);
  const [pageNumber, setPageNumber] = useState<number>(0);

  const handleChange = (_: ChangeEvent<unknown>, value: number) => {
    setPageNumber(value - 1);
  };

  return (
    <Fragment>
      <Grid container rowGap={10} className={"w-full my-20 relative"}>
        {chunk(filesData, PAGINATION_CHUNK_SIZE).map((fileDataChunk, index) => {
          return index === pageNumber
            ? fileDataChunk.map(({ title, content }) => {
                return (
                  <Grid item xs={12} key={title}>
                    <BlogArticleSummary title={title} markdownText={content} />
                  </Grid>
                );
              })
            : null;
        })}
      </Grid>
      <div className="w-full flex justify-center mb-20">
        <Pagination
          count={chunk(filesData, PAGINATION_CHUNK_SIZE).length}
          color={"primary"}
          page={pageNumber + 1}
          onChange={handleChange}
          sx={{
            "& .MuiPaginationItem-root": {
              color: isDarkMode ? "white" : "black",
            },
            "& .Mui-selected": {
              color: "white",
            },
          }}
        />
      </div>
      <ScrollUpButton />
    </Fragment>
  );
};
