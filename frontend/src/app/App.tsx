import { ProviderModalStartProject } from "../shared/store/ContextModalStartProject";
import Header from "../widgets/layout/Header/Header";
import PageHome from "../pages/PageHome/PageHome";
import Footer from "../widgets/layout/Footer/Footer";
import WriteUsPopup from "../widgets/modals/write-us-popup/write-us-popup";

import "./App.css";
import ModalStartProject from "../features/ModalStartProject/ui/ModalStartProject";

function App() {
  return (
    // container
    // <div className="mx-auto max-w-[1450px] px-[10px]">
    // add bottom padding to test inView animations
    <ProviderModalStartProject>
      {/* <div className="pb-200"> */}
      <Header />
      <PageHome />
      <Footer />
      {/* </div> */}
      <ModalStartProject />
    </ProviderModalStartProject>
  );
}

export default App;
