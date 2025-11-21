export const en = {
  validation: {
    firstName: {
      required: "Name is required",
      tooShort: "Name must contain at least 2 characters",
      tooLong: "Name is too long",
    },
    email: {
      required: "Email is required",
      invalid: "Please enter a valid email address",
    },
    phone: {
      invalid: "Please enter a valid phone number (e.g., +380501234567)",
    },
    telegram: {
      invalid: "Please enter a valid Telegram username (e.g., @AsterCraft)",
    },
    message: {
      tooLong: "Message is too long (maximum 5000 characters)",
    },
  },
  contactForm: {
    close: "Close",
    title: "Start a Project",
    subtitleFull:
      "Tell us a bit about your project! Just fill out the form or write to us via <email>E-Mail</email> or <telegram>Telegram</telegram> — we'll get back to you as soon as possible.",
    fields: {
      firstName: {
        label: "Name",
        placeholder: "John Doe",
      },
      telegram: {
        label: "Telegram",
        placeholder: "@AsterCraft",
      },
      email: "Email",
      phone: {
        label: "Phone",
        placeholder: "+380521234897",
      },
      projectDetails: {
        label: "Project Details",
        placeholder: "Describe your project",
      },
    },
    submitButton: {
      default: "Submit",
      validationFailed: "Please fill out the form correctly",
    },
  },
} as const;
