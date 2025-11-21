export const uk = {
  validation: {
    firstName: {
      required: "Ім'я обов'язкове",
      tooShort: "Ім'я повинно містити принаймні 2 символи",
      tooLong: "Ім'я занадто довге",
    },
    email: {
      required: "Email обов'язковий",
      invalid: "Будь ласка, введіть дійсну адресу електронної пошти",
    },
    phone: {
      invalid:
        "Будь ласка, введіть дійсний номер телефону (наприклад, +380501234567)",
    },
    telegram: {
      invalid:
        "Будь ласка, введіть дійсне ім'я користувача Telegram (наприклад, @AsterCraft)",
    },
    message: {
      tooLong: "Повідомлення занадто довге (максимум 5000 символів)",
    },
  },
  contactForm: {
    close: "Закрити",
    title: "Почати проєкт",
    subtitleFull:
      "Розкажіть нам трохи про ваш проєкт! Просто заповніть форму або напишіть нам на <email>E-Mail</email> або <telegram>Telegram</telegram> — ми зв'яжемося з вами якомога швидше.",
    fields: {
      firstName: {
        label: "Ім'я",
        placeholder: "Антон Зубрієв",
      },
      telegram: {
        label: "Telegram",
        placeholder: "@AsterCraft",
      },
      email: "Електронна пошта",
      phone: {
        label: "Телефон",
        placeholder: "+380521234897",
      },
      projectDetails: {
        label: "Деталі проєкту",
        placeholder: "Опишіть свій проєкт",
      },
    },
    submitButton: {
      default: "Надіслати",
      validationFailed: "Будь ласка, заповніть форму правильно",
    },
  },
} as const;
