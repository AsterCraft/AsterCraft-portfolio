import type { MetaFunction } from "react-router";

import { PageHome } from "@pages";

export const meta: MetaFunction = () => {
  return [
    { title: "Aster Craft - Розробка сайтів під ключ" },
    {
      name: "description",
      content:
        "Створюємо сайти на чистому коді без конструкторів. Швидкі, надійні та оптимізовані для пошукових систем.",
    },
  ];
};

const UkIndex = () => {
  return <PageHome />;
};

export default UkIndex;
