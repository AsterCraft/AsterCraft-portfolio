import type { Meta, StoryObj } from "@storybook/react-vite";
import TextButton from "./text-button";

const meta = {
  component: TextButton,
  parameters: {
    docs: {
      description: {
        component:
          "Button styled as text action according to Material Design 3. Customize the color by overriding the CSS variable `--md-comp-text-action-color`.",
      },
    },
  },
} satisfies Meta<typeof TextButton>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Click me",
    onClick: () => alert("Button clicked!"),
  },
};

export const WithIcon: Story = {
  args: {
    children: "Learn more →",
    onClick: () => console.log("Navigate forward"),
  },
};

export const CustomColor: Story = {
  args: {
    children: "Custom color",
    onClick: () => alert("Custom color clicked!"),
    style: {
      "--md-comp-text-action-color": "#ff6b6b",
    } as React.CSSProperties,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Override `--md-comp-text-action-color` to change the button color and state layer color.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled button",
    disabled: true,
    onClick: () => alert("This should not fire"),
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button in disabled state. Note: You may want to add disabled styles to the component.",
      },
    },
  },
};

export const WithType: Story = {
  args: {
    children: "Submit form",
    type: "submit",
    onClick: (e) => {
      e.preventDefault();
      alert("Form submission prevented");
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Button with type='submit' for use in forms. Also supports type='button' (default) and type='reset'.",
      },
    },
  },
};

export default meta;
