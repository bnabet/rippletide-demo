import "../src/styles/global.css";
import "../src/index.css";
import { fn } from "@storybook/test"; // Import fn for action mocks

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
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
};

// Instead of using argTypesRegex, we'll use explicit actions
export const argTypes = {
  onClick: { action: "clicked" },
  onMouseEnter: { action: "mouse entered" },
  onMouseLeave: { action: "mouse left" },
  onFocus: { action: "focused" },
  onBlur: { action: "blurred" },
  onChange: { action: "changed" },
  onSubmit: { action: "submitted" },
};
