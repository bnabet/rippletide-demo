import "../src/styles/global.css";
import "../src/index.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
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
