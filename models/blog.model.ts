export type BlogPageProps = {
  filesData: FileData[];
};

export type FileData = {
  title: string;
  content: string;
  id: number
};

export type BlogArticlesResponse = {
  total_count: number;
  time: number;
  resources: BlogArticleResource[];
};

export type BlogArticleResource = {
  filename: string;
  url: string;
};
