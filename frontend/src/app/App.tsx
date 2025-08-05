import { ProviderModalStartProject } from "../shared/store/ContextModalStartProject";
import Header from "../widgets/layout/Header/Header";
import PageHome from "../pages/PageHome/PageHome";
import Footer from "../widgets/layout/Footer/Footer";
import WriteUsPopup from "../widgets/modals/write-us-popup/write-us-popup";
import ModalStartProject from "../features/ModalStartProject/ui/ModalStartProject";
import BurgerDropdownMenu from "../features/HeaderNavigation/ui/BurgerDropdownMenu";

import "./App.css";

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
      <BurgerDropdownMenu />
    </ProviderModalStartProject>
  );
}

export default App;
