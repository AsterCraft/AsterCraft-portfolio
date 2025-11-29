import type { SVGProps } from "react";

type KeyboardArrowDownIconProps = SVGProps<SVGSVGElement>;

const KeyboardArrowDownIcon = ({
  className,
  ...props
}: KeyboardArrowDownIconProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      height="32px"
      viewBox="0 -960 960 960"
      width="32px"
      fill="currentColor"
      {...props}
    >
      <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
  );
};

export default KeyboardArrowDownIcon;
