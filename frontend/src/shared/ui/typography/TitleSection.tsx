type TitleSectionProps = {
  title: string;
};

const TitleSection = ({ title }: TitleSectionProps) => {
  return <h2 className="mb-3 text-4xl">{title}</h2>;
};

export default TitleSection;
