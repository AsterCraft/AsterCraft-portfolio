import Header from "../widgets/layout/Header/Header";
import PageHome from "../pages/PageHome/PageHome";

import "./App.css";

function App() {
  return (
    // container
    // <div className="mx-auto max-w-[1450px] px-[10px]">
    // add bottom padding to test inView animations
    <div className="pb-200">
      <Header />
      <PageHome />
    </div>
  );
}

export default App;
