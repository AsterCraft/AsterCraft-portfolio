type StageDescritptionProps = {
  className?: string;
};

const StageDescription = ({ className }: StageDescritptionProps) => {
  return (
    <div className={className}>
      <h2>Етап 1: Консультація та брифування</h2>
      <hr />
      <p>
        ● Проведена онлайн-зустріч з фіксацією ваших вимог до структури, дизайну
        та функціоналу сайту
      </p>
      <p>
        ● Визначена попередня вартість та обсяг робіт індивідуальної пропозиції
      </p>
    </div>
  );
};

export default StageDescription;
