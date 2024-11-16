import { Headline } from "../components/headline";

export default {
  title: "components/headline",
  component: Headline,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    level: 1,
    children: "Hello, world!",
  },
};

export const Level1 = {
  args: {
    level: 1,
  },
};

export const Level2 = {
  args: {
    level: 2,
  },
};

export const Level3 = {
  args: {
    level: 3,
  },
};
