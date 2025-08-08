import cn from "classnames";
import { FaRegCheckSquare } from "react-icons/fa";

import SvgDevices from "../../../../shared/ui/svg/SvgDevices";

import { dataPromise } from "../data/dataPromise";

const SectionPromise = () => {
  return (
    <section
      className={cn(
        "flex flex-col",
        "sm:items-center",
        "lg:flex-row lg:items-center lg:justify-between"
      )}
    >
      {/* wrapper for title and list */}
      <div className="max-w-[580px] lg:max-w-[690px]">
        <h2 className="mb-3 text-4xl">Замовте сайт, який приводить клієнтів</h2>
        <ul className="flex flex-col gap-3">
          {dataPromise.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-lg text-zinc-900"
            >
              <FaRegCheckSquare className="min-h-6 min-w-6" />
              <span>{item.benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <SvgDevices
        className={cn(
          "mt-9 h-fit w-full max-w-[550px]",
          "lg:mt-0 lg:max-w-[470px]",
          "xl:max-w-[570px]"
        )}
      />
    </section>
  );
};

export default SectionPromise;
