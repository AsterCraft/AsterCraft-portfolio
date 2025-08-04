import { CheckCircle, XCircle } from "lucide-react";
import { useEffect } from "react";
import "./modal-message.scss";

interface ModalMessageProps {
  statusMessage: string;
  type: string;
  onClose: () => void;
}

const ModalMessage = ({
  statusMessage,
  type,
  onClose,
}: ModalMessageProps) => {
  const Icon = type === "success" ? CheckCircle : XCircle;

  useEffect(() => {
    const timer = setTimeout(onClose, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <>
      <div className="modal-message-overlay"></div>
      <div className={`modal-message ${type}`}>
        <Icon className="modal-icon" />
        <p>{statusMessage}</p>
      </div>
    </>
  );
};

export default ModalMessage;
