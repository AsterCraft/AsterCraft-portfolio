import cn from "classnames";

import SvgDevices from "../../../../shared/ui/SvgImages/SvgDevices";
import TitleSection from "../../../../shared/ui/typography/TitleSection";
import CheckListItems from "../../../../shared/ui/lists/CheckListItems";

import { dataPromiseList } from "../model/dataPromiseList";

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
        <TitleSection title="Замовте сайт, який приводить клієнтів" />

        <CheckListItems items={dataPromiseList} />
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
