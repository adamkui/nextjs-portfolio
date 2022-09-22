import { texts } from "data";

export const useGetText = () => {
  const t = (key: keyof typeof texts) => {
    return `${texts[key]}` || `${key}`;
  };

  return t;
};
