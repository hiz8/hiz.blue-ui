import { Tooltip } from "../components/tooltip";

export default {
  title: "components/tooltip",
  component: Tooltip,
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
