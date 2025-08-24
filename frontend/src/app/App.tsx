import Header from "../widgets/layout/Header/Header";
import PageHome from "../pages/PageHome/PageHome";
import Footer from "../widgets/layout/Footer/Footer";
import ModalStartProject from "../features/ContactForm/ui/ModalStartProject";
import BurgerDropdownMenu from "../features/HeaderNavigation/ui/BurgerDropdownMenu";

import "./App.css";

function App() {
  return (
    <>
      <Header />
      <PageHome />
      <Footer />

      <ModalStartProject />
      <BurgerDropdownMenu />
    </>
  );
}

export default App;
