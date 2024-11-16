import {
  Placeholder,
  PlaceholderLine,
  PlaceholderImage,
  PlaceholderHeader,
} from "../components/placeholder";

export default {
  title: "components/placeholder",
  component: Placeholder,
  // subcomponents: {
  //   PlaceholderLine,
  //   PlaceholderImage,
  //   PlaceholderHeader,
  // },
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  // args: {
  //   children: "Hello, world!",
  // },
};

export const Default = {};

// export const OneItem = {
//   render: (args) => (
//     <Placeholder {...args}>
//       <PlaceholderHeader>
//         <PlaceholderLine />
//         <PlaceholderLine />
//       </PlaceholderHeader>
//     </Placeholder>
//   ),
// };
