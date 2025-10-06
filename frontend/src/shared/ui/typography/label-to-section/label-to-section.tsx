import { BulletBlackSquare } from "@shared/ui/bullets";

interface LabelToSectionProps {
  text: string;
}

export const LabelToSection = ({ text }: LabelToSectionProps) => {
  return (
    <div className="mb-7 flex items-center">
      <BulletBlackSquare />
      <div className="leading-4 uppercase">{text}</div>
    </div>
  );
};
