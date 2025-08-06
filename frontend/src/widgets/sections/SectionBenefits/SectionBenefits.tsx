import { FaRegCheckSquare } from "react-icons/fa";

import SvgDevices from "../../../shared/ui/svg/SvgDevices";

const benefits = [
  {
    benefit:
      "Унікальний сайт, який неможливо повторити. Без шаблонів та обмежень конструкторів",
  },
  {
    benefit: "Отримайте швидкий Landing, сайт-візитку чи сайт компанії",
  },
  {
    benefit:
      "SEO-оптимізація. Чистий код = вищі позиції в Google. Ваші клієнти знайдуть вас без реклами",
  },
];

const SectionBenefits = () => {
  return (
    <section>
      {/* wrapper for title and list */}
      <div>
        <h2 className="mb-3 text-3xl">Замовте сайт, який приводить клієнтів</h2>
        <ul className="flex flex-col gap-3">
          {benefits.map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-center gap-3"
            >
              <FaRegCheckSquare className="min-h-6 min-w-6" />
              <span>{item.benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <SvgDevices className="mt-9 h-fit w-full" />
    </section>
  );
};

export default SectionBenefits;
