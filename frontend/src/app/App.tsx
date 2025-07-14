import Header from "../widgets/layout/Header/Header";
import PageHome from "../pages/PageHome/PageHome";
import Footer from "../widgets/layout/Footer/Footer";
import WriteUsPopup from "../widgets/modals/write-us-popup/write-us-popup";

import "./App.css";

function App() {
  return (
    // container
    // <div className="mx-auto max-w-[1450px] px-[10px]">
    // add bottom padding to test inView animations
    // <div className="pb-200">
    <>
      <Header />
      <PageHome />
      <Footer />
      {/*  </div> */}
      // modal windows
      <WriteUsPopup />
    </>
  );
}

export default App;
