const SectionHero = () => {
  return (
    <section className="h-[100vh] w-full bg-[#1a1a1a] pt-20 text-white">
      {/* text-8xl --> for more 640px screen */}
      <h1 className="pt-35 pl-10 text-6xl">Aster</h1>

      {/* text-8xl pl-40 --> for more 640px screen */}
      <h2 className="pl-27 text-6xl">Craft</h2>

      <hr className="mt-50 mb-10 text-gray-500" />

      <div className="flex flex-col justify-between sm:flex-row">
        <p>I help you make a lasting impression online.</p>
        <button>Start project</button>
      </div>
    </section>
  );
};

export default SectionHero;
