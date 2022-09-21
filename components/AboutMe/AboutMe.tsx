import { FC } from "react";
import { Section } from "../Section/Section";

export const AboutMe: FC = () => {
  return (
    <Section
      title="What I ❤️️"
      body={
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo tenetur nobis accusamus culpa expedita, laudantium dolores asperiores reprehenderit deleniti assumenda maxime voluptatem quod earum officia omnis ab est facere nihil nemo neque tempora incidunt. Quisquam accusamus inventore eum iste nulla iusto suscipit est id sapiente delectus animi amet a aliquid, rerum libero quaerat saepe beatae nam voluptates nihil consequatur accusantium?"
      }
      className="flex flex-col w-full mb-20"
    ></Section>
  );
};
