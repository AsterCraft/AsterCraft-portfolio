import Header from "../widgets/layout/Header/Header";
import PageHome from "../pages/PageHome/PageHome";

import "./App.css";

function App() {
  return (
    // container
    <div className="mx-auto max-w-[1450px] px-[10px]">
      <Header />
      <PageHome />
    </div>
  );
}

export default App;
