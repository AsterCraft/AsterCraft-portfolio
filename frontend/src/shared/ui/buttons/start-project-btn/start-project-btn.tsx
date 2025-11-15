import cn from "classnames";
import { useNavigate } from "react-router";

import { useIsContactFormModalOpenStore } from "../../../lib/store/isContactFormModalOpen";

import s from "./start-project-btn.module.scss";

type StartProjectBtnProps = {
  className?: string;
  text: string;
};

export const StartProjectBtn = ({ className, text }: StartProjectBtnProps) => {
  const { open } = useIsContactFormModalOpenStore();
  const navigate = useNavigate();

  const onHandleClick = () => {
    open();
    navigate("?contact=true", { preventScrollReset: true });
  };

  return (
    <button
      onClick={onHandleClick}
      className={cn(s.startProjectBtn, className)}
    >
      {text}
    </button>
  );
};
