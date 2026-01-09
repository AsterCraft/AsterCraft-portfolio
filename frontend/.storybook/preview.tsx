import type { Preview } from "@storybook/react-vite";
import React from "react";

import "../src/app/main.css";
import "../src/shared/styles/index.scss";

const preview: Preview = {
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";

      return (
        <div
          data-theme={theme}
          style={{
            color: "var(--md-sys-color-on-surface)",
            backgroundColor: "var(--md-sys-color-surface)",
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: "Global theme for components",
      defaultValue: "light",
      toolbar: {
        title: "Theme",
        icon: "circlehollow",
        items: ["light", "dark"],
        dynamicTitle: true,
      },
    },
  },
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],
};

export default preview;
