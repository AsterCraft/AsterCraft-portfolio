import classNames from "classnames";

type DividerBetweenSectionsProps = {
  className?: string;
};

/** @todo rewrite usnig scss and add back the animation */
const DividerBetweenSections = ({ className }: DividerBetweenSectionsProps) => {
  return <hr className={classNames("border-ac-section-divider", className)} />;
};

export default DividerBetweenSections;
