import "@styles/index.css";

//Global Components
import Header from "@components/Header";
import Footer from "@components/Footer";
import ModalHeader from "@components/ModalHeader";

//Pages
import Homepage from "@pages/Homepage";
import CreateAccount from "@pages/CreateAccount";
import ConnectWallet from "@pages/ConnectWallet";

//Routes and Route
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@utils/constants/route";

function App() {
  return (
    <div>
      <Header />
      <ModalHeader />
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccount />} />
        <Route path={ROUTES.CONNECT_WALLET} element={<ConnectWallet />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
