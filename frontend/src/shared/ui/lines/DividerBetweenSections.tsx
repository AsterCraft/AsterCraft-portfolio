import classNames from "classnames";

type DividerBetweenSectionsProps = {
  className?: string;
};

const DividerBetweenSections = ({ className }: DividerBetweenSectionsProps) => {
  return <hr className={classNames("border-ac-section-divider", className)} />;
};

export default DividerBetweenSections;
