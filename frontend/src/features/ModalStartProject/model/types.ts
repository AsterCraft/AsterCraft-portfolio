export type ModalStartProjecStore = {
  firstName: string;
  lastName: string;
  email: string;
  // phone: string;
  // message: string;
  // additionalMesage: string;

  setFirstName: (firstNameValue: string) => void;
  setLastName: (lastNameValue: string) => void;
  setEmail: (emailValue: string) => void;
};
