import { ProviderModalStartProject } from "../shared/store/ContextModalStartProject";
import Header from "../widgets/layout/Header/Header";
import PageHome from "../pages/PageHome/PageHome";

import "./App.css";
import ModalStartProject from "../widgets/modals/ModalStartProject/ModalStartProject";

function App() {
  return (
    // container
    // <div className="mx-auto max-w-[1450px] px-[10px]">
    // add bottom padding to test inView animations
    <ProviderModalStartProject>
      <div className="pb-200">
        <Header />
        <PageHome />
      </div>
      <ModalStartProject />
    </ProviderModalStartProject>
  );
}

export default App;
