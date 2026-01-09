import type { Meta, StoryObj } from "@storybook/react-vite";
import { BrowserRouter } from "react-router";
import TextLink from "./text-link";

const meta = {
  component: TextLink,
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
  parameters: {
    docs: {
      description: {
        component:
          "Button-like text link styled according to Material Design 3. Customize the color by overriding the CSS variable `--md-comp-text-link-color`.",
      },
    },
  },
} satisfies Meta<typeof TextLink>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    to: "/",
    children: "Click me",
  },
};

export const WithIcon: Story = {
  args: {
    to: "/about",
    children: "Learn more →",
  },
};

export const CustomColor: Story = {
  args: {
    to: "/contact",
    children: "Custom color",
    style: {
      "--md-comp-text-link-color": "#ff6b6b",
    } as React.CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Override `--md-comp-text-link-color` to change the link color and state layer color.",
      },
    },
  },
};

export default meta;
