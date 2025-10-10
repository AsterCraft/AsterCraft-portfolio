export type ModalStartProjecStore = {
  firstName: string;
  email: string;
  phone: string;
  message: string;
  telegram: string;
  // additionalMesage: string;

  setFirstName: (firstNameValue: string) => void;
  setTelegram: (telegramValue: string) => void;
  setEmail: (emailValue: string) => void;
  setPhone: (phoneValue: string) => void;
  setMessage: (messageValue: string) => void;

  resetModalStartProject: () => void;
};

export type ButtonSubmitProps = {
  onClick?: () => void;
  disabled?: boolean;
};
