export type ModalStartProjecStore = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  // additionalMesage: string;

  setFirstName: (firstNameValue: string) => void;
  setLastName: (lastNameValue: string) => void;
  setEmail: (emailValue: string) => void;
  setPhone: (phoneValue: string) => void;
  setMessage: (messageValue: string) => void;
};

export type ButtonSubmitProps = {
  onClick?: () => void;
};
