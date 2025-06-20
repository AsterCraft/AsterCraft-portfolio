const SectionHero = () => {
  return (
    // do you need w-screen here?
    <section className="h-[100vh] w-screen bg-[#1a1a1a] pt-15 text-white">
      <div className="container">
        <h1>Aster Craft</h1>
      </div>
      <hr />
      <div className="container">
        <div>
          <p>I help you make a lasting impression online.</p>
          <button>Start project</button>
        </div>
      </div>
    </section>
  );
};

export default SectionHero;
