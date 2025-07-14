import "@styles/index.css";

//Global Components
import Header from "@components/Header";
import Footer from "@components/Footer";
import ModalHeader from "@components/ModalHeader";

//Pages
import Homepage from "@pages/Homepage";
import CreateAccount from "@pages/CreateAccount";

//Routes and Route
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <ModalHeader />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
