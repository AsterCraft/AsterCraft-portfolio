import ButtonBuy from "../../../../shared/ui/buttons/ButtonBuy/ButtonBuy";

const SectionHero = () => {
  return (
    <section className="h-[100vh] w-full bg-[#1a1a1a] pt-20 text-white">
      <div className="pt-35 pl-10 text-6xl sm:text-8xl md:text-[10rem]">
        <h1 className="">Aster</h1>
        <h2 className="pl-17 sm:pl-40">Craft</h2>
      </div>

      <hr className="mt-50 mb-10 text-gray-500" />

      <div className="Container flex flex-col justify-between sm:flex-row">
        <p>I help you make a lasting impression online.</p>
        <ButtonBuy text={"Start Project"} />
      </div>
    </section>
  );
};

export default SectionHero;
