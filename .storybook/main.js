/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  typescript: {
    check: false,
    reactDocgen: false,
  },
  webpackFinal: async (config) => {
    // Handle CSS files directly with minimal preprocessing
    const cssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes("css")
    );

    if (cssRule) {
      // Remove or simplify the existing CSS rule
      config.module.rules = config.module.rules.filter((rule) => rule !== cssRule);
    }

    // Add a CSS rule that processes tailwind
    config.module.rules.push({
      test: /\.css$/,
      use: [
        "style-loader",
        "css-loader",
        {
          loader: "postcss-loader",
          options: {
            postcssOptions: {
              plugins: [require("tailwindcss"), require("autoprefixer")],
            },
          },
        },
      ],
      include: /src/,
    });

    // Improve TypeScript handling
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              ["@babel/preset-env", { targets: "defaults" }],
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      ],
      include: /src/,
      exclude: /node_modules/,
    });

    // Make sure TypeScript extensions are properly resolved
    if (config.resolve) {
      config.resolve.extensions = [...(config.resolve.extensions || []), ".ts", ".tsx"];
    }

    return config;
  },
};

export default config;
