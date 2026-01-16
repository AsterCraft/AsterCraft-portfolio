import type { Meta, StoryObj } from "@storybook/react-vite";
import ProjectCard from "./project-card";

const meta = {
  component: ProjectCard,
} satisfies Meta<typeof ProjectCard>;

type Story = StoryObj<typeof meta>;

export const TitleLeft: Story = {
  args: {
    content: {
      url: "https://www.roxy.com/",
      imgPath: "/img/projects/roxy.webp",
      name: "Roxy",
      description: "Величезний магазин для спортивних товарів",
    },

    direction: "title-left",
  },
};

export default meta;
