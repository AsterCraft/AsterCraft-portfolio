import { useState } from "react";
import cn from "classnames";

import TitleSection from "../../../shared/ui/typography/TitleSection";

import { faqData } from "../config/FAQData";

export const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev);

      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }

      return newSet;
    });
  };

  return (
    <div
      id="FAQSection"
      className={cn("my-8", "app-container")}
    >
      <TitleSection
        title="Поширені запитання (FAQ)"
        className="text-center"
      />

      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg border border-gray-200 shadow-sm"
          >
            <button
              onClick={() => toggleItem(index)}
              className="flex w-full items-center justify-between bg-white px-6 py-4 text-left transition-colors duration-200 hover:bg-gray-50 focus:bg-gray-50 focus:outline-none"
            >
              <span
                className={cn(
                  "pr-4 text-lg font-semibold text-gray-800",
                  "sm:text-xl",
                  "lg:text-2xl"
                )}
              >
                {faq.question}
              </span>
              <svg
                className={`h-5 w-5 flex-shrink-0 transform text-gray-500 transition-transform duration-200 ${
                  openItems.has(index) ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openItems.has(index)
                  ? "max-h-[1300px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              <div
                className={cn(
                  "border-t border-gray-100 bg-gray-50 px-6 py-4 text-lg leading-relaxed text-zinc-600",
                  "sm:text-xl"
                )}
              >
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
