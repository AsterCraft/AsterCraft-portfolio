import { PropagateLoader } from "react-spinners";

import "./ModalLoading.scss";

const ModalLoading = () => {
  return (
    <div className="modal-loading">
      <div className="modal-loading__overlay"></div>
      <div className="modal-loading__content">
        <PropagateLoader className="modal-loading__content-spinner" />
        <p className="modal-loading__content-text">
          Зачекайте, будь ласка, відправляємо повідомлення
        </p>
      </div>
    </div>
  );
};

export default ModalLoading;
