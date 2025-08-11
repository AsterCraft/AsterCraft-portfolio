import cn from "classnames";

import telegramIcon from "../../../../shared/assets/img/icons/telegram-logo.svg";

const SectionTelegramContact = () => {
  return (
    <section className={cn("bg-ac-bg-dark py-10 text-white")}>
      <div
        className={cn(
          "app-container",
          "sm:flex"
          // "lg:items-center lg:justify-center"
        )}
      >
        {/* "flex items-center gap-20" */}
        <h2
          className={cn(
            "mb-5 flex flex-col text-center",
            "sm:text-start",
            "lg:mb-0 lg:flex-row lg:items-center"
          )}
        >
          <span className="mr-2 text-4xl">Маєте питання?</span>
          <span className={cn("text-2xl", "md:text-3xl", "lg:text-4xl")}>
            Задайте його в телеграм:
          </span>
        </h2>
        <a
          href="https://t.me/AsterCraft"
          target="_blank"
          className={cn(
            "m-[0_auto] flex h-fit w-fit items-center rounded-[50px] bg-[#2ca3d6]",
            "sm:m-0 sm:ml-10"
          )}
        >
          <img
            src={telegramIcon}
            alt="Посилання на наш телеграм @MED0YED"
            className={cn("w-12", "sm:w-16")}
          />
          <span className={cn("mx-6 text-xl", "sm:text-2xl")}>@AsterCraft</span>
        </a>
      </div>
    </section>
  );
};

export default SectionTelegramContact;
