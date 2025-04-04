import type { Preview } from "@storybook/react";
import "../src/index.css"; // Import Tailwind CSS
import "../src/styles/global.css"; // Import global styles

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#f8f8f8",
        },
        {
          name: "dark",
          value: "#333",
        },
      ],
    },
    layout: "centered",
  },
};

export default preview;
