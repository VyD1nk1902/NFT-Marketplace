import "@styles/index.css";

//Global Components
import Header from "@components/Header";
import Footer from "@components/Footer";
import ModalHeader from "@components/ModalHeader";

//Routes and Route
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "@utils/constants/route";

//Pages
import Homepage from "@pages/Homepage";
import CreateAccount from "@pages/CreateAccount";
import ConnectWallet from "@pages/ConnectWallet";
import Marketplace from "@pages/Marketplace";
import Ranking from "@pages/Ranking";
import NftPage from "@pages/NftPage";
import ArtistPage from "@pages/ArtistPage";

function App() {
  return (
    <div>
      <Header />
      <ModalHeader />
      <Routes>
        <Route path={ROUTES.HOME} element={<Homepage />} />
        <Route path={ROUTES.CREATE_ACCOUNT} element={<CreateAccount />} />
        <Route path={ROUTES.CONNECT_WALLET} element={<ConnectWallet />} />
        <Route path={ROUTES.MARKETPLACE} element={<Marketplace />} />
        <Route path={ROUTES.RANKINGS} element={<Ranking />} />
        <Route path={ROUTES.NFT_DETAILS} element={<NftPage />} />
        <Route path={ROUTES.ARTIST_DETAILS} element={<ArtistPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
